import {extname} from "node:path";

export const isValidFileFormat = (fileName) => {
  const allowedExtensions = [
    '.txt', '.md', '.rtf', '.doc', '.docx', '.pdf', 
    '.json', '.xml', '.csv', '.yaml', '.yml',
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.tiff',
    '.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a',
    '.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv',
    '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2',
    '.exe', '.bat', '.sh', '.cmd', '.ps1', '.jar',
    '.html', '.css', '.js', '.ts', '.jsx', '.tsx'
  ];

  const extension = extname(fileName).toLowerCase();
  return allowedExtensions.includes(extension);
};
