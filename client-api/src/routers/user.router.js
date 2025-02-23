import express from "express";
const router = express.Router();
import {
  insertUser,
  getUserByEmail,
  getUserById,
  updatePassword,
  storeUserRefreshJWT,
} from "../model/user/User.model.js";
import { hashPassword, comparePassword } from "../helper/bcrypt.helper.js";
import { createAccessJWT, createRefreshJWT } from "../helper/jwt.helper.js";
import { userAuthorization } from "../middlewares/authorization.middleware.js";
import {
  setPasswordResetPin,
  deletePasswordResetPin,
  getPinByEmail,
} from "../model/reset-pin/resetPin.model.js";
import sendMail from "../helper/email.helper.js";
import {
  loginValidation,
  resetPassReqValidation,
  resetPassValidation,
} from "../middlewares/validation.middleware.js";
import { deleteJWT } from "../helper/redis.helper.js";

router.all("/", (req, res, next) => {
  next();
});

// Get User Profile Router
router.get("/", userAuthorization, async (req, res) => {
  const _id = req.userId;

  const userProf = await getUserById(_id);
  res.json({ userProf });
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
router.post("/login", loginValidation, async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  const passFromDb = user && user._id ? user.password : null;
  if (!passFromDb) return res.status(400).json({ message: "User not found" });

  const isMatch = await comparePassword(password, passFromDb);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const accessJWT = await createAccessJWT({ id: `${user._id}` });
  const refreshJWT = await createRefreshJWT({ id: `${user._id}` });

  res.status(200).json({ message: "User logged in", accessJWT, refreshJWT });
});

// Password reset request
router.post("/reset-password", resetPassReqValidation, async (req, res) => {
  const { email } = req.body;

  try {
    await deletePasswordResetPin(email);
    const user = await getUserByEmail(email);

    if (user && user._id) {
      const setPin = await setPasswordResetPin(email);
      const mail = await sendMail(email, setPin.pin, "request-password-reset");

      if (mail && mail.messageId) {
        return res.json({
          message:
            "An email will be sent to you containing the password reset pin",
        });
      }

      res
        .status(400)
        .json({ message: "Something went wrong, try again later" });
    } else {
      res.status(400).json({
        message:
          "If the email exists, we will send you the pin to change your password",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Password reset
router.patch("/reset-password", resetPassValidation, async (req, res) => {
  const { email, pin, newPassword } = req.body;
  try {
    const pinFromDb = await getPinByEmail(email);

    if (pinFromDb && pinFromDb.pin === pin) {
      const hashedPassword = await hashPassword(newPassword);
      const user = await updatePassword(email, hashedPassword);
      if (user && user._id) {
        await deletePasswordResetPin(email);
        await sendMail(email, pin, "reset-successful");
        return res.json({ message: "Password changed successfully" });
      }
    }
    return res.status(500).json({ message: "Invalid or Expired Pin" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

// User logout
router.delete("/logout", userAuthorization, async (req, res) => {
  const { authorization } = req.headers;
  const userId = req.userId;
  try {
    await deleteJWT(authorization);
    await storeUserRefreshJWT(userId, "");
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
