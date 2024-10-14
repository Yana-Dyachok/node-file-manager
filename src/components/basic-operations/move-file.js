import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { copyFile } from './copy-file.js';

export const moveFile = async ([srcFilePath, destFilePath]) => {
    await copyFile([srcFilePath, destFilePath]);
    srcFilePath = resolve(srcFilePath.replace(/"/g, '').trim());
    await rm(srcFilePath);
};
