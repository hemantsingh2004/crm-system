import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { insertUser, getUserByEmail } from "../model/user/User.model.js";
import { hashPassword, comparePassword } from "../helper/bcrypt.helper.js";
import { createAccessJWT, createRefreshJWT } from "../helper/jwt.helper.js";

router.all("/", (req, res, next) => {
  // res.json({ message: "Hello User API" });
  next();
});

// Create new user router
router.post("/", async (req, res) => {
  const { password, ...rest } = req.body;
  try {
    //hash password
    const hashedPassword = await hashPassword(password);

    const newUserObj = {
      ...rest,
      password: hashedPassword,
    };
    const result = await insertUser(newUserObj);
    res.json({ message: "New User created", result });
  } catch (err) {
    console.log("Error from router here", err);
    res.status(400).json({ message: err.message });
  }
});

// User sign in endpoint
router.post("/login", async (req, res) => {
  // Chek if email and password is provided
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Bad request" });
  const user = await getUserByEmail(email);

  // Getting password from database
  const passFromDb = user && user._id ? user.password : null;
  if (!passFromDb) return res.status(400).json({ message: "User not found" });

  // Compare password
  const isMatch = await comparePassword(password, passFromDb);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  // Create refresh and access JWT
  const accessJWT = await createAccessJWT({ id: `${user._id}` });
  const refreshJWT = await createRefreshJWT({ id: `${user._id}` });

  res.status(200).json({ message: "User logged in", accessJWT, refreshJWT });
});

export default router;
