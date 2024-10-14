import { cwd } from "node:process";
import {EOL} from 'node:os';

export const getDirectoryPath = async () => console.log(`${EOL}You are currently in ${cwd()}`);