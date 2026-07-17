import { po } from "gettext-parser";
import path from "node:path";
import fs from "node:fs";

const ROOT = path.resolve(".");
const SRC = path.join(ROOT, "vendor/granite/po");
const DEST = path.join(ROOT, "public/vendor/granite/po");

try {
  fs.mkdirSync(DEST, { recursive: true });
} catch {}

for (const poFile of fs.globSync(path.join(SRC, "**/*.po"))) {
  console.log(`Found po file: ${poFile}`);

  const poRel = path.relative(SRC, poFile);
  const dir = path.dirname(path.join(DEST, poRel));
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch {}
  const jsonFile = path.join(dir, path.basename(poFile).replace(/po$/, "json"));

  console.log(`Writing json file: ${jsonFile}`);
  const poParsed = po.parse(fs.readFileSync(poFile), { validation: false });

  const tr = poParsed.translations[""];
  const obj = {
    charset: poParsed.charset,
    headers: poParsed.headers,
    translations: {} as Record<string, string[]>,
  };
  for (const key in tr) {
    if (!key) continue;
    obj.translations[tr[key]["msgid"]] = tr[key]["msgstr"];
  }


  fs.writeFileSync(jsonFile, JSON.stringify(obj, undefined, 2), { encoding: "utf-8" });
}
