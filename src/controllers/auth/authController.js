import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../../models/users/userModel.js";

// REGISTER
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await createUser(username, email, hashedPassword);

  res.redirect("/login");
};

// LOGIN
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    return res.send("User not found");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.send("Invalid password");
  }

  req.session.user = user;

  res.redirect("/");
};

// LOGOUT
export const logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};