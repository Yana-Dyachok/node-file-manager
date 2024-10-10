import readlinePromises from "node:readline/promises";
import { inputCommands } from "./input-commands.js";
import { byeMessage } from "./general.js";

export const beginCLI = () => {
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("line", line => inputCommands(rl, line));
  rl.on("SIGINT", () => rl.close());
  rl.on("close", () => {
    byeMessage();
    process.nextTick(() => process.exit());
  });
}