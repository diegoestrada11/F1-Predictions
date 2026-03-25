import express from "express";
import { submitPrediction } from "../controllers/predictionController.js";

const router = express.Router();

router.post("/", submitPrediction);

export default router;