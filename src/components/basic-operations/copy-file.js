import { createReadStream, createWriteStream } from 'fs';
import { access } from 'node:fs/promises';
import { resolve, basename } from 'node:path';

export const copyFile = async ([srcFilePath, destFilePath]) => {
    srcFilePath = resolve(srcFilePath.replace(/"/g, '').trim());
    destFilePath = resolve(
        destFilePath.replace(/"/g, '').trim(),
        basename(srcFilePath)
    );
    await access(srcFilePath);
    const readStream = createReadStream(srcFilePath);
    const writeStream = createWriteStream(destFilePath, { flags: 'wx' });
    await new Promise((resolve, reject) => {
        readStream.pipe(writeStream);
        readStream.on('error', reject);
        writeStream.on('error', reject);
        writeStream.on('close', resolve);
    });
};
