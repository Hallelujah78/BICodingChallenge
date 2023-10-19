import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors/index.js";
// import { jsonTestWrapper } from "../DELETE_BEFORE_DEPLOY/jsonTest.js";

import {
  createResponseObject,
  getData,
  restCountriesSingleCountryUrl,
  currencyObject,
  languageObject,
  populateResponseObject,
  countryObject,
  restCountriesGetNamesUrl,
  getNames,
} from "../utils/index.js";

const getCountryNames = async (req, res) => {
  // await jsonTestWrapper();
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
    // handle the error
    throw new CustomError.NotFoundError("404 not found");
  }

  const response = populateResponseObject({
    object: result[0],
    createResponseObject,
    languageObject,
    currencyObject,
    countryObject,
  });

  res.status(StatusCodes.OK).json(response);
};

export { getCountry, getCountryNames };
