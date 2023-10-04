import express from "express";

import {
  getCountry,
  getAllCountries,
} from "../controllers/countryController.js";

const router = express.Router();

// router.route("/").get(getAllCountries);
router.route("/").post(getCountry);
export default router;
