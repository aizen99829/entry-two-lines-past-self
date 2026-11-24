import { mkdirSync, writeFileSync } from "node:fs";

const FIRST_LINE =
  "Dear younger me: the cringe fades, but the lessons stay.";
const SECOND_LINE =
  "Take the trip, send the text, and start before you feel ready.";

function buildEntry(): string {
  const lines = [FIRST_LINE, SECOND_LINE];
  for (const line of lines) {
    if (!line || line.trim().length === 0) {
      throw new Error("Entry line must not be empty");
    }
  }
  return lines.join("\n") + "\n";
}

function main(): void {
  const entry = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();
