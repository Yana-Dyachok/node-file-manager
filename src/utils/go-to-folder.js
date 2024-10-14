import { getAbsolutePath } from './get-absolute-path.js';

export const goToFolder = async ([...args]) => {
    process.chdir(getAbsolutePath(args));
};
