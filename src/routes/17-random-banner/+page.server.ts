import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function toBase64(filePath: string) {
  const img = await readFile(filePath);
  return "data:image/png;base64," + Buffer.from(img).toString("base64");
}

export async function load() {
  const bannerArray = ["red", "yellow", "green", "blue", "brown"];
  const idx = Math.floor(Math.random() * bannerArray.length);
  const imgFilePath = resolve(
    __dirname,
    `../../../static/17/img/${bannerArray[idx]}.jpg`
  );

  return {
    bannerImg: await toBase64(imgFilePath),
  };
}
