import { readFile, writeFile } from "fs/promises";
import arrayOfObjectsFromKeyValue from "../utils/arrayOfObjFromKeyValue.js";

const jsonTest = async () => {
  const json = await readJsonData();
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

const getCountryLowestKeys = async () => {
  const data = await readJsonData();
  const countryKeys = { country: "", keys: 35 };
  data.forEach((country) => {
    let countryKeyLength = Object.keys(country).length;
    if (countryKeyLength < countryKeys.keys) {
      countryKeys.keys = countryKeyLength;
      countryKeys.country = country.name.common;
    }
  });
  console.log(countryKeys);
};

const readJsonData = async () => {
  return JSON.parse(await readFile(new URL("./allData.json", import.meta.url)));
};

const jsonTestWrapper = async () => {
  getCountryLowestKeys();
};

export { jsonTest, getCountryLowestKeys, jsonTestWrapper };
