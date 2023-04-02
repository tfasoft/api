// Requires

import { appConfig } from "@/config";
import { mongodb } from "@/connections";

import app from "./app/index.js";

mongodb.on("open", () => {
  app.listen(appConfig.port, async () => {
    console.log(`App is running on ${appConfig.port}`);
  });
});
