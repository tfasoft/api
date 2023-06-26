import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";
import { appConfig } from "$app/config/index.js";

const {
  admin: { atlas, host, port, collection },
} = databaseConfig;

const url = appConfig.production
  ? atlas
  : `mongodb://${host}:${port}/${collection}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to admin db.");
  }
});

export default connection;
