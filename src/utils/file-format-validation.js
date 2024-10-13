import {extname} from "node:path";
import { ALLOWED_EXTENSIONS } from "./const.js";

export const isValidFileFormat = (fileName) => {
  const extension = extname(fileName).toLowerCase();
  return ALLOWED_EXTENSIONS.includes(extension);
};
