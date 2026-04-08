import express from "express";
import { registerUser, loginUser, logoutUser } from "../../controllers/auth/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.get("/login", (req, res) => {res.render("auth/login", {error: null,success: req.query.success || null});});
router.get("/register", (req, res) => res.render("auth/register", { error: null }));

export default router;