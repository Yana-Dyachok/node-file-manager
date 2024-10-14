import { createReadStream } from 'node:fs';
import { getAbsolutePath } from '../../utils/get-absolute-path.js';

export const readContentFile = async ([...pathToFile]) => {
  const path = getAbsolutePath(pathToFile);
  const readStream = createReadStream(path, { encoding: 'utf-8' });

  return new Promise((resolve, reject) => {
    readStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readStream.on('end', () => {
      resolve();
    });

    readStream.on('error', (err) => {
      reject(err);
    });
  });
};


