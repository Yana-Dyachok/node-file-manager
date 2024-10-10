  import { getAbsolutePath } from "../utils/get-clean-path.js";

export const goToFolder = async ([...args]) => {
  process.chdir(getAbsolutePath(args));
};


