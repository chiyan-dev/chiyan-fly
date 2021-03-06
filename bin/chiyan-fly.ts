import { Denomander } from "../deps.ts";
import { start } from "../src/mod.ts";

import appConfig from "../denon.json" assert { type: "json" };

const program = new Denomander({
  app_name: appConfig.name,
  app_description: appConfig.description,
  app_version: appConfig.version,
});

program
  .command("start [dir]", "start")
  .option("-p, --port ", "Listen on port")
  .parse(Deno.args);

const realDir = await Deno.realPath(program.dir);

console.log("Start app: ", realDir);

start(realDir, program.port);
