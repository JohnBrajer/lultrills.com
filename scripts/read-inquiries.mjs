import { readdir, readFile } from 'node:fs/promises';

const directory = process.env.INQUIRY_DIR || '/app/data/inquiries';
const files = (await readdir(directory)).filter((name) => /^[a-f0-9-]{36}\.json$/.test(name));
const inquiries = await Promise.all(files.map(async (name) => JSON.parse(await readFile(`${directory}/${name}`, 'utf8'))));
inquiries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
console.log(JSON.stringify(inquiries, null, 2));
