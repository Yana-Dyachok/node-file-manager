import {resolve} from "node:path";

export const getAbsolutePath = args => {
  const cleanedPath = args.join(" ").replaceAll('"', '').trim();
  return resolve(cleanedPath);
};
