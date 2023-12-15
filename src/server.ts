import Express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next.utils";

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

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("next.js started");
    app.listen(port, () => {
      payload.logger.info(
        `next.js app url:${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};
start();
