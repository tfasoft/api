// ----------------------------------------------
// key.middleware.js
// ----------------------------------------------
// API Key Middleware.
// Check that the request apiKey is valid or not.

import { appConfig } from "$app/config/index.js";

const key = async (req, res, next) => {
  // ----------------------------------------------
  // key()
  // ----------------------------------------------
  // First, get the apiKey from headers.
  // Then check the key with key from config.
  // Done!

  const { apikey } = req.headers;

  if (!apikey) {
    return res.status(401).send({ message: "Unautorized" });
  }

  if (apikey !== appConfig.secret) {
    return res.status(401).send({ message: "Unautorized" });
  }

  next();
};

export default key;
