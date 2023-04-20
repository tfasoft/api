import env from "$app/env/index.js";

export default {
  admin: {
    atlas: env.MONGO_ADMIN_ATLAS,
    host: env.MONGO_ADMIN_HOST,
    port: env.MONGO_ADMIN_PORT,
    collection: env.MONGO_ADMIN_COLLECTION,
  },
  user: {
    atlas: env.MONGO_USER_ATLAS,
    host: env.MONGO_USER_HOST,
    port: env.MONGO_USER_PORT,
    collection: env.MONGO_USER_COLLECTION,
  },
};
