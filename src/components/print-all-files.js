import { readdir } from "node:fs/promises";
import { ERROR_OPERATION } from "../utils/const.js";

export const printAllFiles = async () => {
  try {
    const currentDir = process.cwd();
    const files = await readdir(currentDir, { withFileTypes: true });
    
    const elements = files.map(element => ({
      name: element.name,
      type: element.isFile() ? "file" : "directory"
    }));

    const sortedFolders = sortASC(elements.filter(el => el.type === "directory"));
    const sortedFiles = sortASC(elements.filter(el => el.type === "file"));

    console.table([...sortedFolders, ...sortedFiles]);
  } catch (err) {
    console.error(ERROR_OPERATION);
  }
};

const sortASC = arr => {
    return arr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  };
  
