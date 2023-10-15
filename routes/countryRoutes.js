import express from "express";

import {
  getCountry,
  getCountryNames,
} from "../controllers/countryController.js";

const router = express.Router();

router.route("/").post(getCountry).get(getCountryNames);

export default router;
