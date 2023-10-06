import { readFile } from "fs/promises";
import crypto from "crypto";

const returnObjectLength = (obj) => {
  return Object.keys(obj).length;
};

const jsonTest = async () => {
  const json = JSON.parse(
    await readFile(new URL("./allData.json", import.meta.url))
  );
  let salt = "f844b09ff50c";
  let hashes = [];
  let count = 0;
  json.forEach((country) => {
    if (returnObjectLength(country.maps) < 2) {
      console.log("***WARNING***");
    } else {
      count++;
      console.log(
        `good! count: ${count}: google: ${!!country.maps.openStreetMaps}`
      );
    }
    if (Object.keys(country).length === 35) {
      const keyString = Object.keys(country).join("");
      let hash = crypto
        .pbkdf2Sync(keyString, salt, 3, 64, "md5")
        .toString("hex");
      hashes.push({ country, hash });
    }
  });
  const referenceHash = hashes[0].hash;

  hashes.forEach((object) => {
    if (object.hash === referenceHash) {
      // console.log(
      //   `country: ${object.country.name.common}\nobjHash: ${object.hash}\nrefHash: ${referenceHash}\n\n`
      // );
      // console.log("good");
    } else {
      // console.log("****bad****");
    }
  });
};

export { jsonTest };
