import express from "express";

import { getCountry } from "../controllers/countryController.js";

const router = express.Router();

router.route("/").post(getCountry);
export default router;
