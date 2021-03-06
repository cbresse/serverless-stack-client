const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51Ia3RXEGiHanjwgDSitGdtV1A1NFV6ejPkBc2tdWzwv99YFKj6xqYmWnDDQNtAi6GUXR21EsUExGIyleUsgklTBS00LpFIvvTV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-application-attach",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sqeatn2obi.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FyWCAlGw7",
    APP_CLIENT_ID: "2sstjviotijvjn4hbc3alv3vbj",
    IDENTITY_POOL_ID: "us-east-1:e6b1eab9-dd05-4cb1-be86-6e71ff7d11d9",
  },
};

export default config;