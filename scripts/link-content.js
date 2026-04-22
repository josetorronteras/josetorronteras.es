import { existsSync, lstatSync, rmSync, symlinkSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const target = resolve(root, "../josetorronteras.es-content");
const link = resolve(root, "src/data/content");

if (!existsSync(target)) {
  console.error(`Content repo not found at: ${target}`);
  console.error(
    "Clone it with: git clone https://github.com/josetorronteras/josetorronteras.es-content.git ../josetorronteras.es-content",
  );
  process.exit(1);
}

const stat = lstatSync(link, { throwIfNoEntry: false });
if (stat) {
  if (stat.isSymbolicLink()) {
    rmSync(link);
  } else if (stat.isDirectory()) {
    try {
      execSync("git ls-files --error-unmatch src/data/content", { cwd: root, stdio: "pipe" });
    } catch {
      console.error("src/data/content is an untracked directory. Remove it manually first.");
      process.exit(1);
    }
    rmSync(link, { recursive: true });
  }
}

symlinkSync(target, link, "junction");
console.log(`Linked: src/data/content -> ${target}`);
