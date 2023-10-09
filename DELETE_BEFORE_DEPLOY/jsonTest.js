import { readFile, writeFile } from "fs/promises";
import arrayOfObjectsFromKeyValue from "../utils/arrayOfObjFromKeyValue.js";

const jsonTest = async () => {
  const json = JSON.parse(
    await readFile(new URL("./allData.json", import.meta.url))
  );
  let uniqueLang = {};
  let langCodes = [];
  json.forEach((country) => {
    let tempArray = [];
    if (country.languages) {
      tempArray = arrayOfObjectsFromKeyValue({
        object: country.languages,
        newKeyName: "code",
        newValueName: "lang",
      });
      langCodes = [...langCodes, ...tempArray];
    }
  });
  langCodes.map((item) => {
    if (uniqueLang[item.code] === undefined) {
      uniqueLang[item.code] = item.lang;
    }
  });
  try {
    await writeFile(
      "uniqueLang.txt",
      JSON.stringify(uniqueLang, null, 2),
      "utf8"
    );
  } catch (err) {
    console.log(err);
  }
};

export { jsonTest };
