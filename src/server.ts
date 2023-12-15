import Express from "express";
import { getPayloadClient } from "./get-payload";

const app = Express();
const port = Number(process.env.PORT) || 3000;
const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`admin url ${cms.getAdminURL}`);
      },
    },
  });
};
start();
