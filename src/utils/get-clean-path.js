import path from "node:path";

export const getAbsolutePath = args => {
  const cleanedPath = args.join(" ").replaceAll('"', '').trim();
  return path.resolve(cleanedPath);
};
