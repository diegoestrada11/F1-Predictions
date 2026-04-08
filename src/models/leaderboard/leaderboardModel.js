import pool from "../db.js";

export const getLeaderboard = async () => {
  const result = await pool.query(`
    SELECT users.username, COUNT(predictions.id) * 10 AS points
    FROM users
    JOIN predictions ON users.id = predictions.user_id
    GROUP BY users.username
    ORDER BY points DESC
  `);

  return result.rows;
};