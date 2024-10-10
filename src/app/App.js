import { homedir } from "node:os";
import { welcomeMessage} from '../components/general.js';
import { getDirectoryPath } from '../utils/get-directory-path.js';
import { beginCLI } from "../components/begin-cli.js";

export class App {
  async start() {
    process.chdir(homedir());
    welcomeMessage();
    getDirectoryPath();
    beginCLI();    
  }
}

