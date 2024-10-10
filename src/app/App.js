import { welcomeMessage } from '../components/general.js';
import { getDirectoryPath } from '../utils/get-directory-path.js';

export class App {
    start() {
        welcomeMessage();
        getDirectoryPath();
    }
}
