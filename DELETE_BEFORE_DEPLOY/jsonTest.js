import { readFile } from "fs/promises";
import crypto from "crypto";

const jsonTest = async () => {
  console.log(crypto.getHashes());

  const json = JSON.parse(
    await readFile(new URL("./allData.json", import.meta.url))
  );
  let salt = "f844b09ff50c";
  json.forEach((country) => {
    let hashes = [];
    if (Object.keys(country).length === 35) {
      const keyString = Object.keys(country).join("");
      let hash = crypto
        .pbkdf2Sync(keyString, salt, 3, 64, "md5")
        .toString("hex");
      hashes.push(hash);
    }
    const referenceHash = hashes[0];

    hashes.forEach((hash) => {
      if (hash === referenceHash) {
        console.log("good");
      } else {
        console.log("****bad****");
      }
    });
  });
};

export default jsonTest;
