import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const SITE = "https://www.lultrills.com";
const HOST = "www.lultrills.com";
const KEY_FILE = "55592b66f56c2cbf76f7f2a9bccda90c.txt";
const KEY_PATH = resolve(process.cwd(), "public", KEY_FILE);
const key = (await readFile(KEY_PATH, "utf8")).trim();

const defaults = [
  "/trillsverse-bible",
  "/trillsverse-bible.json",
  "/trillsverse",
  "/identity-architecture",
  "/identity-architecture.json",
  "/corpus.json",
  "/corpus.md",
  "/corpus.txt",
  "/llms.txt",
  "/llms-full.txt",
  "/.well-known/ai.txt",
  "/sitemap.xml",
];

const supplied = process.argv.slice(2);
const paths = supplied.length ? supplied : defaults;
const urlList = [...new Set(paths.map((value) =>
  value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `${SITE}${value.startsWith("/") ? value : `/${value}`}`
))];

for (const url of urlList) {
  if (!url.startsWith(`${SITE}/`) && url !== SITE) {
    throw new Error(`Refusing to submit URL outside canonical host: ${url}`);
  }
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `${SITE}/${KEY_FILE}`,
    urlList,
  }),
});

const body = await response.text();
if (!response.ok) {
  throw new Error(`IndexNow ${response.status}: ${body || response.statusText}`);
}

console.log(JSON.stringify({
  ok: true,
  status: response.status,
  submitted: urlList.length,
  urls: urlList,
}, null, 2));
