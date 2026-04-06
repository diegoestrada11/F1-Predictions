import { addPrediction } from "../../models/predictions/predictionModel.js";

export const submitPrediction = (req, res) => {
  const { p1, p2, p3, raceId } = req.body;

  console.log("Prediction received:");
  console.log({
    p1,
    p2,
    p3,
    raceId
  });

  res.redirect(`/races/${raceId}`);
};