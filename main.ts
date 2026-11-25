// The Best Advice I Ever Got — entry program (v2, revised).
// Writes a single sentence (<= 200 chars) of advice actually given
// to /output/entry.txt and prints it to stdout.
//
// Revision note (v1 -> v2): v1 was a generic finance proverb
// ("never borrow money to look rich ... interest arrives before the
// respect does") — it read manufactured, a cliché dressed up as a
// punchline, with no lived moment in it. v2 keeps the same speaker
// (my father) but turns the advice into a concrete, specific rule
// about a real situation (signing a promise on a good day) with a
// sharper, original image (bad days coming to collect it).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My father said never sign a promise on a good day, because the bad days are the ones that come to collect it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
