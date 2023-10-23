import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors/index.js";

import {
  createResponseObject,
  getData,
  restCountriesSingleCountryUrl,
  currencyObject,
  languageObject6392,
  populateResponseObject,
  countryObject,
  restCountriesGetNamesUrl,
  getNames,
} from "../utils/index.js";

const getCountryNames = async (req, res) => {
  let result = await getNames(restCountriesGetNamesUrl);
  result = result.map((country) => {
    let option = {};
    option.value = country.name.common.toLowerCase();
    option.label = country.name.common;
    return option;
  });

  res.status(StatusCodes.OK).json(result);
};

const getCountry = async (req, res) => {
  const country = req.body.country;
  if (!country) {
    throw new CustomError.BadRequestError("please provide a country value");
  }

  const result = await getData(country, restCountriesSingleCountryUrl);

  if (!result) {
    throw new CustomError.NotFoundError("404 not found");
  }

  const response = populateResponseObject({
    object: result[0],
    createResponseObject,
    languageObject6392,
    currencyObject,
    countryObject,
  });
  res.status(StatusCodes.OK).json(response);
};

export { getCountry, getCountryNames };
