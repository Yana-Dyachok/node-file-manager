import {resolve} from "node:path";

export const getAbsolutePath = args => {
  const cleanedPath = args.join(" ").replace(/"/g, "").trim();
  return resolve(cleanedPath);
};
