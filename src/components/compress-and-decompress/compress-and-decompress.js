import { pipeline } from 'node:stream/promises';
import { resolve, basename } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { access } from 'node:fs/promises';

const processFile = async ([srcFilePath, destFilePath], isCompress) => {
    srcFilePath = resolve(srcFilePath.replace(/"/g, '').trim());
    const fileName = isCompress
        ? basename(srcFilePath) + '.br'
        : basename(srcFilePath).replace(/.br/g, '');
    destFilePath = resolve(destFilePath.replace(/"/g, '').trim(), fileName);

    await access(srcFilePath);

    const srcFile = createReadStream(srcFilePath);
    const destFile = createWriteStream(destFilePath, { flags: 'wx' });
    const processStream = isCompress
        ? createBrotliCompress()
        : createBrotliDecompress();
    await pipeline(srcFile, processStream, destFile);
};

export const compressFile = async (filePaths) => processFile(filePaths, true);
export const decompressFile = async (filePaths) =>
    processFile(filePaths, false);
