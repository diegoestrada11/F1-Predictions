import express from "express";
import { submitPrediction } from "../../controllers/predictions/predictionController.js";
import { requireAuth } from "../../middleware/auth.js";

const router = express.Router();

router.post("/", submitPrediction);

export default router;