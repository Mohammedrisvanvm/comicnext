import Express,{Request,Response} from "express";
import { nextApp, nextHandler } from "./next.utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import { getPayloadClient } from "./get-payload";

const app = Express();
const port = Number(process.env.PORT) || 3000;

const createContext = ({ req, res }:trpcExpress.CreateExpressContextOptions) => ({req,res});
const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`admin url ${cms.getAdminURL}`);
      },
    },
  });
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.use((req:Request, res:Response) => nextHandler(req, res));

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
