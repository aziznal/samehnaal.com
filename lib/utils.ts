import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Example usage
 * console.log(getFileExtension("example.png")); // Outputs: 'png'
 * console.log(getFileExtension("archive.tar.gz")); // Outputs: 'gz'
 * console.log(getFileExtension("no_extension_file")); // Outputs: null
 * */
export function getFileExtension(filename: string): string | null {
  const match = filename.match(/\.([^\.]+)$/);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}
