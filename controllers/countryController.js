import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors/index.js";
import { jsonTestWrapper } from "../DELETE_BEFORE_DEPLOY/jsonTest.js";

import {
  createResponseObject,
  getData,
  restCountriesApiUrl,
  currencyObject,
  languageObject,
  populateResponseObject,
  countryObject,
} from "../utils/index.js";

const getCountry = async (req, res) => {
  await jsonTestWrapper();
  const country = req.body.country;
  if (!country) {
    throw new CustomError.BadRequestError("please provide a country value");
  }

  const result = await getData(country, restCountriesApiUrl);
  console.log(result[0].languages);
  if (!result) {
    // handle the error
    throw new CustomError.NotFoundError(
      "Greetings from the backend, terribly sorry about this. I'm afraid there's been a bit of a mix up."
    );
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

export { getCountry };
