import { mkdirSync, writeFileSync } from "node:fs";

// One-line safety warning label for humans: label form first, recognition
// second, and the turn lands in the last few words.
const LABEL =
  "WARNING: Contents: one human, convinced it is the exception to every rule ever written — including the ones printed on this label.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
