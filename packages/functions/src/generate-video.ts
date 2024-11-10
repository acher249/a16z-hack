import { Resource } from "sst";
import { Util } from "@notes/core/util";
const { LumaAI } = require('lumaai');
import fetch from 'node-fetch';
const fs = require('fs');

export const main = Util.handler(async (event) => {
    const { imageUrl, audioUrl } = JSON.parse(event.body || "");
    
    console.log("image URL: " + imageUrl);
    console.log("audio URL: " + audioUrl);

    const client = new LumaAI({
        authToken: Resource.StripeSecretKey.value
    });

    try {
        console.log("imageUrl: " + imageUrl);
        let generation = await client.generations.create({
            prompt: "Pan around the head move it only a fraction of an inch from left and right. Do not over rotate and add anyone else into the frame. And you should pan over VERY VERY slowly.",
            keyframes: {
                frame0: {
                    type: "image",
                    url: imageUrl
                }
            }
        });
    
        console.log("Got past generation state");
        let completed = false;
    
        while (!completed) {
            generation = await client.generations.get(generation.id);
    
            if (generation.state === "completed") {
                console.log("Generation Complete!");
                completed = true;
            } else if (generation.state === "failed") {
                console.log("Generation Failed :(");
                throw new Error(`Generation failed: ${generation.failure_reason}`);
            } else {
                console.log("Dreaming...");
                await new Promise(r => setTimeout(r, 3000)); // Wait for 3 seconds
            }
        }
    
        const videoUrl = generation.assets.video;
        console.log("Video URL: " + videoUrl);        

        const anotherApiUrl = "https://api.captions.ai/api/lipdub/submit"; // Replace with your actual endpoint
        const response = await fetch(anotherApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": Resource.CaptionsAPIKey.value
            },
            body: JSON.stringify({
                videoUrl: videoUrl,
                audioUrl: audioUrl
            })
        });

        const data = await response.json();
        console.log("Another API Response:", data);
        const opId = data.operationId;

        console.log("Operation ID: ", opId);

        // wait 30 seconds before checking here.. 
        await new Promise(r => setTimeout(r, 30000)); // Wait for 30 secs first seconds

        let CaptionCompleted = false;
        while (!CaptionCompleted) {
            const captionResponse = await fetch("https://api.captions.ai/api/lipdub/poll", {
                method: "POST",
                headers: {
                    "x-api-key": Resource.CaptionsAPIKey.value,
                    "x-operation-id": opId
                }
            });

            if (!response.ok) {
                console.error("Error fetching status, response not OK");
                throw new Error(`Error: ${response.statusText}`);
            }

            const status = await captionResponse.json();
            console.log("Status: ", status);
            if (status.state === "COMPLETE") {
                console.log("Video Generation Complete WOOHOOO!");
                console.log(status.url);
                CaptionCompleted = true;
                return JSON.stringify({ status: true });  
            } else if (status.state === "failed") {
                console.log("Video Generation Failed :(");
                CaptionCompleted = true;
                throw new Error(`Generation failed: ${generation.failure_reason}`);
            } else {
                console.log("Creating with Caption AI...");
                await new Promise(r => setTimeout(r, 5000)); // Wait for 3 seconds
            }
        }
        
        return JSON.stringify({ status: true });        
    } catch (error) {
        console.error("An error occurred during the generation process:", error);
        return JSON.stringify({ status: false });
    }
});