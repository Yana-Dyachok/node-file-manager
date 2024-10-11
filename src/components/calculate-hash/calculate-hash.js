import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { getAbsolutePath } from '../../utils/get-absolute-path.js';

export const calculateHash = async ([...pathToFile]) => {
    const path = getAbsolutePath(pathToFile);
    const hash = createHash('sha256');
    const input = createReadStream(path);

    return new Promise((resolve, reject) => {
        input.on('data', (chunk) => {
            hash.update(chunk);
        });

        input.on('end', () => {
            const fileHash = hash.digest('hex');
            console.log(fileHash);
            resolve(fileHash);
        });
        input.on('error', (err) => {
            reject(`Error reading file: ${err.message}`);
        });
    });
};

