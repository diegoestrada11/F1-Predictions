import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../../models/users/userModel.js";

// REGISTER
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return res.render("auth/register", {
      error: "Email already in use"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await createUser(username, email, hashedPassword);

  res.redirect("/login?success=Account created! Please log in.");
};

// LOGIN
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

    if (!user) {
        return res.render("auth/login", { error: "User not found" });
    }

  const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        return res.render("auth/login", { error: "Invalid password" });
    }

  req.session.user = user;

  res.redirect("/");
};

// LOGOUT
export const logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};