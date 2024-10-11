import { getDirectoryPath } from "../utils/get-directory-path.js";
import { commandLine } from "../utils/command-line.js";
import { ERROR_OPERATION } from "../utils/const.js";

export const inputCommands = async (rl, line) => {
  await commandLine(rl, line).catch(() => console.error(ERROR_OPERATION));
  
  await getDirectoryPath();
};

