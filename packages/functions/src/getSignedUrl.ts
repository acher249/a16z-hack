import { Resource } from "sst";
import { Util } from "@notes/core/util";
import fetch from "node-fetch";

const AGENT_ID = 'fDZAiS9NUCtHyn9riiI6'; 

export const main = Util.handler(async (event) => {
  try {
    //elevenlabs agent id is hard coded for now
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
      {
        method: "GET",
        headers: {
          "xi-api-key": Resource.ElevenLabsSecretKey.value,
        },
      }
    );

    if (!response.ok) {
      return JSON.stringify({
        statusCode: response.status,
        body: JSON.stringify({
          error: "Failed to get signed URL",
          status: response.status,
        }),
      });
    }

    const data = await response.json();

    return JSON.stringify({
      statusCode: 200,
      body: JSON.stringify({
        signedUrl: data.signed_url,
      }),
    });
  } catch (error) {
    console.error("Error:", error);
    return JSON.stringify({
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to get signed URL",
      }),
    });
  }
});