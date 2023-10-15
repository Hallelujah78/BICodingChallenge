import countryInfoAsText from "./aboutCountry.js";
import { getData, getNames } from "./axiosRequest.js";
import {
  restCountriesGetNamesUrl,
  restCountriesSingleCountryUrl,
} from "./config.js";
import currencyObject from "./currencyObject.js";
import languageObject from "./languageObject.js";
import isEmpty from "./isEmpty.js";
import createResponseObject from "./createResponseObject.js";
import populateResponseObject from "./populateResponseObject.js";
import arrayOfObjectsFromKeyValue from "./arrayOfObjFromKeyValue.js";
import countryObject from "./countryObject.js";
export {
  countryInfoAsText,
  getData,
  restCountriesSingleCountryUrl,
  currencyObject,
  languageObject,
  isEmpty,
  createResponseObject,
  populateResponseObject,
  arrayOfObjectsFromKeyValue,
  countryObject,
  restCountriesGetNamesUrl,
  getNames,
};
