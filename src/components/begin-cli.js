import readlinePromises from "node:readline/promises";
import { byeMessage } from "./general.js";

export const beginCLI = () => {
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("SIGINT", () => rl.close());
  rl.on("close", () => {
    byeMessage();
    process.nextTick(() => process.exit());
  });
}