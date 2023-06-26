import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";
import { appConfig } from "$app/config/index.js";

const {
  user: { atlas, host, port, collection },
} = databaseConfig;

const url = appConfig.production
  ? atlas
  : `mongodb://${host}:${port}/${collection}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to user db.");
  }
});

export default connection;
