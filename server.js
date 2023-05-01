// Requires

import { appConfig } from "$app/config/index.js";
import { redis } from "$app/connections/index.js";

import app from "./app/index.js";

redis.on("connect", () =>
  app.listen(appConfig.port, () => {
    console.log(`App is running on ${appConfig.port}`);
  })
);
