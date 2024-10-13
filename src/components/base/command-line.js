import { ERROR_INPUT, OS } from '../../utils/const.js';
import { goToFolder } from '../../utils/go-to-folder.js';
import { printAllFiles } from './print-all-files.js';
import { addFile } from '../basic-operations/add-file.js';
import { isValidFileFormat } from '../../utils/file-format-validation.js';
import { readContentFile } from '../basic-operations/read-file.js';
import { deleteFile } from '../basic-operations/delete-file.js';
import { renameFile } from '../basic-operations/rename-file.js';
import { copyFile } from '../basic-operations/copy-file.js';
import { moveFile } from '../basic-operations/move-file.js';
import { calculateHash } from '../calculate-hash/calculate-hash.js';
import {
    compressFile,
    decompressFile,
} from '../compress-and-decompress/compress-and-decompress.js';
import { operatingSystemInfo } from '../operating-system/operating-system.js';

export const commandLine = async (rl, line) => {
    const parts = line
        .trim()
        .split(' ')
        .filter((arg) => arg !== '');
    const command = parts[0];
    const args = parts.slice(1);
    switch (command) {
        case 'up':
            process.chdir('..');
            break;
        case 'cd':
            await goToFolder(args);
            break;
        case 'ls':
            await printAllFiles();
            break;
        case 'add':
            if (!isValidFileFormat(args.join(' '))) {
                console.error(ERROR_INPUT);
                break;
            }
            await addFile(args);
            break;
        case 'cat':
            await readContentFile(args);
            break;
        case 'rn':
            await renameFile(args);
            break;
        case 'rm':
            await deleteFile(args);
            break;
        case 'cp':
            await copyFile(args);
            break;
        case 'mv':
            await moveFile(args);
            break;
        case 'hash':
            await calculateHash(args);
            break;
        case 'compress':
            await compressFile(args);
            break;
        case 'decompress':
            if (!args[0].includes('.br')) {
                console.error(ERROR_INPUT);
                break;
            }
            await decompressFile(args);
            break;
        case 'os': {
            if (args.length !== 1 || !OS.includes(args[0])) {
                console.error(ERROR_INPUT);
                break;
            }

            operatingSystemInfo(args[0]);
            break;
        }
        case '.exit':
            rl.close();
            break;
        default:
            console.error(ERROR_INPUT);
            break;
    }
};
