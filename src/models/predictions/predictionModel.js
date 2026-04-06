import pool from "../db.js";

export const addPrediction = async (raceId, p1, p2, p3) => {
  const query = `
    INSERT INTO predictions (race_id, p1, p2, p3)
    VALUES ($1, $2, $3, $4)
  `;
  await pool.query(query, [raceId, p1, p2, p3]);
};

export const getPredictionsByRace = async (raceId) => {
  const result = await pool.query(
    "SELECT * FROM predictions WHERE race_id = $1",
    [raceId]
  );
  return result.rows;
};