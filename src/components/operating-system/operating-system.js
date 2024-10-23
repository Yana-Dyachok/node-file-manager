import os from 'node:os';
import { getCPUInfo } from '../../utils/get-cpu-info.js';

export const operatingSystemInfo = (operation) => {
    switch (operation) {
        case '--EOL': {
            console.log(`System EOL: ${JSON.stringify(os.EOL)}`);
            break;
        }

        case '--cpus': {
            getCPUInfo();
            break;
        }

        case '--homedir': {
            console.log(`Home directory: ${os.homedir()}`);
            break;
        }

        case '--username': {
            const { username } = os.userInfo();
            console.log(`System user name: ${username}`);
            break;
        }

        case '--architecture': {
            console.log(`CPU architecture: ${os.arch()}`);
            break;
        }

        default: {
            console.error(ERROR_INPUT);
            break;
        }
    }
};


  
  