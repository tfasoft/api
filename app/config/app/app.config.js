import env from "$app/env/index.js";

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  secret: env.APP_SECRET,
  version: "4.1.1",
};
