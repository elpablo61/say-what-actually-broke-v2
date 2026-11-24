// Say What Actually Broke — u-po-pu-say-what-actually-broke-a2c153b5
// One line of honest error copy: a config typo, told straight.
// Winner of a 5-variant pairwise judge (rubric: names the real failure,
// funny on one read, punchline last, shippable in a real dialog).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A typo in the config pointed the whole site at a server that does not exist. We are fixing the typo, not the person who made it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
