// Real-Life Patch Notes entry: one-line patch note for a bug in human biology.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v2.7.3: fixed a bug where the brain replayed that thing you said in 2014 every night at 3 a.m. with no skip button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
