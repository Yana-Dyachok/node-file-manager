import { rm } from 'node:fs/promises';
import { getAbsolutePath } from '../../utils/get-absolute-path.js';

export const deleteFile = async ([...path]) => {
        await rm(getAbsolutePath(path));
};
