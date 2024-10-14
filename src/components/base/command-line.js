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
            if (args.length !== 0) {
                console.error(ERROR_INPUT);
                break;
            }
            process.chdir('..');
            break;
        case 'cd':
            if (args.length !== 1) {
                console.error(ERROR_INPUT);
                break;
            }
            await goToFolder(args);
            break;
        case 'ls':
            if (args.length !== 0) {
                console.error(ERROR_INPUT);
                break;
            }
            await printAllFiles();
            break;
        case 'add':
            if (!isValidFileFormat(args.join(' ')) || args.length !== 1) {
                console.error(ERROR_INPUT);
                break;
            }
            await addFile(args);
            break;
        case 'cat':
            if (args.length !== 1) {
                console.error(ERROR_INPUT);
                break;
            }
            await readContentFile(args);
            break;
        case 'rn':
            if (args.length !== 2) {
                console.error(ERROR_INPUT);
                break;
            }
            await renameFile(args);
            break;
        case 'rm':
            if (args.length !== 1) {
                console.error(ERROR_INPUT);
                break;
            }
            await deleteFile(args);
            break;
        case 'cp':
            if (args.length !== 2) {
                console.error(ERROR_INPUT);
                break;
            }
            await copyFile(args);
            break;
        case 'mv':
            if (args.length !== 2) {
                console.error(ERROR_INPUT);
                break;
            }
            await moveFile(args);
            break;
        case 'hash':
            if (!isValidFileFormat(args.join(' ')) || args.length !== 1) {
                console.error(ERROR_INPUT);
                break;
            }
            await calculateHash(args);
            break;
        case 'compress':
            if (args.length !== 2) {
                console.error(ERROR_INPUT);
                break;
            }
            await compressFile(args);
            break;
        case 'decompress':
            if (!args[0].includes('.br') || args.length !== 2) {
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
            if (args.length !== 0) {
                console.error(ERROR_INPUT);
                break;
            }
            rl.close();
            break;
        default:
            console.error(ERROR_INPUT);
            break;
    }
};
