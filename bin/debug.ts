#!/usr/bin/env -S deno run --inspect-brk --allow-net --allow-read --allow-write --allow-plugin --unstable

import { command } from "./command.ts";

command();