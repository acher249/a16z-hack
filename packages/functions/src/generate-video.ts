import { Resource } from "sst";
import { Util } from "@notes/core/util";
import { LumaAI } from 'lumaai';

export const main = Util.handler(async (event) => {
    const { imageUrl } = JSON.parse(event.body || "");

    const client = new LumaAI({
        authToken: Resource.StripeSecretKey.value
    });

    let generation = await client.generations.create({
        prompt: "Please create a video of panning from left to right",
        keyframes: {
            frame0: {
                type: "image",
                url: imageUrl
            }
        }
    });

    let completed = false;

    while (!completed) {
        generation = await client.generations.get(generation.id);

        if (generation.state === "completed") {
            completed = true;
        } else if (generation.state === "failed") {
            throw new Error(`Generation failed: ${generation.failure_reason}`);
        } else {
            console.log("Dreaming...");
            await new Promise(r => setTimeout(r, 3000)); // Wait for 3 seconds
        }
    }

    const videoUrl = generation.assets.video;

    const response = await fetch(videoUrl);
    const fileStream = fs.createWriteStream(`${generation.id}.mp4`);
    await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        response.body.on('error', reject);
        fileStream.on('finish', resolve);
    });

    console.log(`File downloaded as ${generation.id}.mp4`);

  return JSON.stringify({ status: true });
});
