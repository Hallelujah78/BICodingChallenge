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

const compareCountryKeys = async (country1, country2) => {
  const data = await readJsonData();
  console.log(data[0]);

  const keysCountry1 = data.map((country) => {
    if (country.name.common === country1) {
      return Object.keys(country);
    }
    return;
  });

  console.log(keysCountry1);
  const keysCountry2 = data.map((country) => {
    if (country.name.common === country2) {
      return Object.keys(country);
    }
    return "hi";
  });
  console.log(keysCountry2);
  // keysCountry2.forEach((key, index) => console.log(key, keysCountry1[index]));
};

const countryCodes = async () => {
  const data = await readJsonData();
  const countryObject = {};
  data.forEach((country) => {
    countryObject[country.cca3] = country.name.common;
  });

  try {
    await writeFile(
      "countryObject.txt",
      JSON.stringify(countryObject, null, 2),
      "utf8"
    );
  } catch (err) {
    console.log(err);
  }
};

const jsonTestWrapper = async () => {
  // compareCountryKeys("Bouvet Island", "Antarctica");
  // countryCodes();
};

export { jsonTest, getCountryLowestKeys, jsonTestWrapper };
