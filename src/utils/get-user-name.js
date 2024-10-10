import { INITIAL_USERNAME } from "./const.js";
export const getUserName = () => {
  const usernameFromEnv = process.env.npm_config_username;

  if (usernameFromEnv) {
    return usernameFromEnv; 
  }

  const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));

  if (!usernameArg) {
    return INITIAL_USERNAME; 
  }

  return usernameArg.split("=")[1] || INITIAL_USERNAME; 
};
