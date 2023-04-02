import env from "@/env";

export default {
  mongodb: {
    host: env.MONGODB_HOST,
    port: env.MONGODB_PORT,
    collection: env.MONGODB_COLLECTION,
  },
};
