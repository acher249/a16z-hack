// Create an S3 bucket
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table
export const table = new sst.aws.Dynamo("Notes", {
  fields: {
    userId: "string",
    noteId: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "noteId" },
});

// Create a secret for Stripe
export const stripeSecret = new sst.Secret("StripeSecretKey");
export const elevenLabsSecret = new sst.Secret("ElevenLabsSecretKey");
