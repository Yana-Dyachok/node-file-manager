import { cwd } from "node:process";

export const getDirectoryPath = async () => console.log(`\nYou are currently in ${cwd()}`);