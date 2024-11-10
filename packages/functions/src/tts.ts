import { Resource } from "sst";
import { Util } from "@notes/core/util";
import fetch from "node-fetch";

const VOICE_ID = 'HGvnhzZQV1sJNDF5il0L';

export const main = Util.handler(async (event) => {
  console.log('Received event:', JSON.stringify(event));
  
  try {
    if (!event.body) {
      console.log('Error: Missing request body');
      return JSON.stringify({
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing request body"
        }),
      });
    }

    const body = JSON.parse(event.body);
    const { text } = body;
    console.log('Processing text-to-speech request for text:', text);

    if (!text) {
      console.log('Error: Text field is missing in request body');
      return JSON.stringify({
        statusCode: 400,
        body: JSON.stringify({
          error: "Text is required"
        }),
      });
    }

    console.log('Making request to ElevenLabs API...');
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": Resource.ElevenLabsSecretKey.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        }),
      }
    );

    if (!response.ok) {
      console.log('ElevenLabs API error:', response.status, await response.text());
      return JSON.stringify({
        statusCode: response.status,
        body: JSON.stringify({
          error: "Failed to generate speech",
          status: response.status,
        }),
      });
    }

    console.log('Successfully received audio response from ElevenLabs');
    const audioBuffer = await response.arrayBuffer();
    console.log('Audio buffer size:', audioBuffer.byteLength, 'bytes');
    
    return JSON.stringify({
      statusCode: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"'
      },
      body: Buffer.from(audioBuffer).toString('base64'),
      isBase64Encoded: true
    });

  } catch (error) {
    console.error('Unhandled error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace available');
    return JSON.stringify({
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to generate speech",
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    });
  }
});