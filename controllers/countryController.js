import { StatusCodes } from "http-status-codes";
import * as CustomError from "../errors/index.js";
import getData from "../utils/axiosRequest.js";
import { jsonTest } from "../DELETE_BEFORE_DEPLOY/jsonTest.js";
const getAllCountries = async (req, res) => {
  res.status(StatusCodes.OK).json({ status: "getAllCountries" });
};

const getCountry = async (req, res) => {
  const country = req.body.country;
  if (!country) {
    throw new CustomError.BadRequestError("please provide a country value");
  }
  const result = await getData(country);

  if (!result) {
    // handle the error
    throw new CustomError.NotFoundError(
      "We should get the error from the countries api and do something with that"
    );
  }
  const countryData = result[0];

  jsonTest();

  res.status(StatusCodes.OK).json(result[0]);
};

export { getAllCountries, getCountry };
