# SST Demo Notes App

The [SST Guide](https://sst.dev/guide) is a comprehensive open source tutorial for building and deploying full-stack apps using serverless and React on AWS.

We create a note taking app from scratch — [**demo.sst.dev**](https://demo.sst.dev)

![Demo App](screenshot.png)

We use React.js, AWS Lambda, API Gateway, DynamoDB, and Cognito. This repo is a full-stack serverless app built with SST.

- The `infra/` directory defines our AWS infrastructure.
- The `packages/functions` directory contains the Lambda functions that power the CRUD API.
- The `packages/frontend` directory contains the React app.

It's a single-page React app powered by a serverless CRUD API. We also cover how add user authentication, handle file uploads, and process credit card payments with Stripe.

### Prerequisites

Before you get started:

1. [Configure your AWS credentials](https://docs.sst.dev/advanced/iam-credentials#loading-from-a-file)
2. [Install the SST CLI](https://ion.sst.dev/docs/reference/cli/)

### Usage

Clone this repo.

```bash
git clone https://github.com/sst/notes.git
```

Install dependencies.

```bash
npm install
```

This project uses a secret that we are not checking in to the repo. Make sure to [create one before deploying](https://sst.dev/chapters/handling-secrets-in-sst.html).

```bash
sst secret set StripeSecretKey <YOUR_STRIPE_SECRET_TEST_KEY>
```

#### Developing Locally
http://localhost:5173/

From your project root run: // Ajc: run this for localhost
```bash
npx sst dev
```

This will start your frontend and run your functions [Live](https://ion.sst.dev/docs/live/).

#### Deploying to Prod

Run this in the project root to deploy it to prod.

```bash
npx sst deploy --stage prod
```


Make sure to set your secret for prod as well.

```bash
sst secret set StripeSecretKey <YOUR_STRIPE_SECRET_TEST_KEY> --stage production
```

---

Join the SST community over on [Discord](https://discord.gg/sst) and follow us on [Twitter](https://twitter.com/SST_dev).


// Adam Notes
 - There is some conflict between running npx sst dev, which deploys infra and starts a local server on local host, and running npx sst deploy --stage dev..
 - Need to run npx sst deploy --stage dev to get a cloud front distribution... but also need npx sst dev to test locally.. not sure the best dev cycle on this..
 - It seems like it is working to run npx sst dev first to get the local host running then deploy npx sst deploy --stage dev to get all the resources set..
 - Confirmed workign in this sequence... saving to dynamodb and all.