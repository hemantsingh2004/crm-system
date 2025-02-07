import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { insertUser } from "../model/user/User.model.js";
import { hashPassword } from "../helper/bcrypt.helper.js";

router.all("/", (req, res, next) => {
  // res.json({ message: "Hello User API" });
  next();
});

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

export default router;
