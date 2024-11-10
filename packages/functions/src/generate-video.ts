import { Resource } from "sst";
import { Util } from "@notes/core/util";
const { LumaAI } = require('lumaai');
const fetch = require('node-fetch');
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
            prompt: "Please create a video of panning from left to right",
            keyframes: {
                frame0: {
                    type: "image",
                    url: imageUrl
                }
            }        });
    
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
    
        // Now let's pass this onto CaptionsAPI to integrate with the video..

        const response = await fetch(videoUrl);
        const fileStream = fs.createWriteStream(`${generation.id}.mp4`);
        await new Promise((resolve, reject) => {
            response.body.pipe(fileStream);
            response.body.on('error', reject);
            fileStream.on('finish', resolve);
        });

        return JSON.stringify({ status: true });
    } catch (error) {
        console.error("An error occurred during the generation process:", error.message);
        return JSON.stringify({ status: false });
    }
});