import os from 'node:os';
import { getCPUInfo } from '../../utils/get-cpu-info.js';

export const operatingSystemInfo = (operation) => {
    switch (operation) {
        case '--EOL': {
            console.log(JSON.stringify(os.EOL));
            break;
        }

        case '--cpus': {
            console.log(getCPUInfo());
            break;
        }

        case '--homedir': {
            console.log(os.homedir());
            break;
        }

        case '--username': {
            const { username } = os.userInfo();
            console.log(username);
            break;
        }

        case '--architecture': {
            console.log(os.arch());
            break;
        }

        default: {
            console.error(ERROR_INPUT);
            break;
        }
    }
};


  
  