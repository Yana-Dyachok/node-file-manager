import {EOL} from 'node:os';
import { getUserName } from "../../utils/get-user-name.js";

const USERNAME =  getUserName();

export const welcomeMessage = () => {
  console.log(`Welcome to the File Manager, ${USERNAME}!`);
};

export const byeMessage = () => {
  console.log(`${EOL}Thank you for using File Manager, ${USERNAME}, goodbye!`);
};
