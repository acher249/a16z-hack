import { Resource } from "sst";
import { Util } from "@notes/core/util";
const { LumaAI } = require('lumaai');
const fetch = require('node-fetch');

export const main = Util.handler(async (event) => {
    const { videoUrl, audioUrl } = JSON.parse(event.body || "");
    console.log("video URL: " + videoUrl);
    console.log("audio URL: " + audioUrl);

    try {
        const payload = {
            "audioUrl": audioUrl,
            "videoUrl": videoUrl
        };

        console.log("Contacting Captions API now...");
        const response = await fetch("https://api.captions.ai/api/lipdub/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": Resource.CaptionsAPIKey.value
            },
            body: JSON.stringify(payload)
        });

        return JSON.stringify({ status: true });

    } catch (error) {
        console.error("An error occurred during the combining audio and video process:", error.message);
        return JSON.stringify({ status: false });
    }
  });
  