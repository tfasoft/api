// Requires

import { appConfig } from "$app/config/index.js";

import app from "./app/index.js";

app.listen(appConfig.port, () => {
  console.log(`App is running on ${appConfig.port}`);
});
