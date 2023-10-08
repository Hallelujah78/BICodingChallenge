import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors/index.js";
// import getData from "../utils/axiosRequest.js";
// import createResponseObject from "../utils/createResponseObject.js";
// import responseObject from "../utils/responseObject.js";
// import languageObject from "../utils/languageObject.js";
// import { restCountriesApiUrl } from "../utils/config.js";

import {
  createResponseObject,
  getData,
  restCountriesApiUrl,
  currencyObject,
  languageObject,
  populateResponseObject,
} from "../utils/index.js";

const getAllCountries = async (req, res) => {
  res.status(StatusCodes.OK).json({ status: "getAllCountries" });
};

const getCountry = async (req, res) => {
  const country = req.body.country;
  if (!country) {
    throw new CustomError.BadRequestError("please provide a country value");
  }

  const result = await getData(country, restCountriesApiUrl);

  if (!result) {
    // handle the error
    throw new CustomError.NotFoundError(
      "We should get the error from the countries api and do something with that"
    );
  }

  const response = populateResponseObject({
    object: result[0],
    createResponseObject,
    languageObject,
    currencyObject,
  });

  res.status(StatusCodes.OK).json(response);
};

export { getAllCountries, getCountry };
