import {writeFile} from "node:fs/promises";
import path from "node:path";

export const addFile = async ([...fileName]) => {
  const pathFile = path.resolve(`${process.cwd()}/${fileName.join(" ")}`);
  await writeFile(pathFile, "", { flag: "wx+" });
};

