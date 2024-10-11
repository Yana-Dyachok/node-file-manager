import {writeFile} from "node:fs/promises";
import {resolve} from "node:path";

export const addFile = async ([...fileName]) => {
  const pathFile = resolve(`${process.cwd()}/${fileName.join(" ")}`);
  await writeFile(pathFile, "", { flag: "wx+" });
};

