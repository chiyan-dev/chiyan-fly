import { Application, oakCors, Router } from "../deps.ts";
import { initRouters } from "./router-manager/mod.ts";
import { getConfig } from "./utils/config.ts";
import { initMiddleware } from "./middleware-manager/mod.ts";

const app = new Application();
const router = new Router();
const defaultPort = 3000;

export async function start(appPath: string, port?: number) {
  window.APP_PATH = appPath;

  const configs = await getConfig();
  const hostname = configs.hostname || "127.0.0.1";
  port = port || configs.port || defaultPort;

  await initRouters(app, router, appPath);
  await initMiddleware(app, appPath);
  app.use(oakCors(configs.corsOptions));
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen({ port: port!, hostname });
  console.log("🚀 Listening", `${hostname}:${port}`);
}
