import { ERROR_INPUT } from './const.js';
import { goToFolder } from '../components/go-to-folder.js';
export const commandLine = async (rl, line) => {
    const parts = line.trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
        case 'up':
            process.chdir('..');
            break;
        case 'cd':
            await goToFolder(args);
            break;
        case '.exit':
            rl.close();
            break;
        default:
            console.error(ERROR_INPUT);
            break;
    }
};
