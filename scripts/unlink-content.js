import { lstatSync, unlinkSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const link = resolve(root, "src/data/content");

const stat = lstatSync(link, { throwIfNoEntry: false });

if (!stat) {
  console.log("src/data/content does not exist, nothing to unlink.");
  process.exit(0);
}

if (!stat.isSymbolicLink()) {
  console.error("src/data/content is not a symlink. Refusing to remove.");
  process.exit(1);
}

unlinkSync(link);
execSync("git restore src/data/content", { cwd: root, stdio: "inherit" });
console.log("Unlinked src/data/content and restored tracked files.");
