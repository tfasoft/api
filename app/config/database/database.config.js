import env from "$app/env/index.js";

export default {
  admin: {
    host: env.MONGO_ADMIN_HOST,
    port: env.MONGO_ADMIN_PORT,
    collection: env.MONGO_ADMIN_COLLECTION,
  },
  user: {
    host: env.MONGO_USER_HOST,
    port: env.MONGO_USER_PORT,
    collection: env.MONGO_USER_COLLECTION,
  },
};
