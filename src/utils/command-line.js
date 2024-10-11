import { ERROR_INPUT } from './const.js';
import { goToFolder } from '../components/go-to-folder.js';
import { printAllFiles } from '../components/print-all-files.js';
import { addFile } from '../components/basic-operations/add-file.js';
import { isValidFileFormat } from './file-format-validation.js';
import { readContentFile } from '../components/basic-operations/read-file.js';
import { deleteFile } from '../components/basic-operations/delete-file.js';
import { renameFile } from '../components/basic-operations/rename-file.js';
import { copyFile } from '../components/basic-operations/copy-file.js';

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
        case '.exit':
            rl.close();
            break;
        default:
            console.error(ERROR_INPUT);
            break;
    }
};
