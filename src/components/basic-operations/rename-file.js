import { rename } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

export const renameFile = async ([srcFilePath, destFilePath]) => {
    const path = srcFilePath.replace(/"/g, "").trim();
    srcFilePath = resolve(process.cwd(), path);
    destFilePath = resolve(dirname(srcFilePath), destFilePath);
    await rename(srcFilePath, destFilePath);
};
