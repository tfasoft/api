// Requires

import { appConfig } from "$app/config/index.js";
import { user, admin } from "$app/connections/index.js";

import app from "./app/index.js";

user.on("error", () => {
  console.log("Error in connecting user");
  process.exit(1);
});

admin.on("error", () => {
  console.log("Error in connecting admin");
  process.exit(1);
});

app.listen(appConfig.port, () => {
  console.log(`App is running on ${appConfig.port}`);
});
