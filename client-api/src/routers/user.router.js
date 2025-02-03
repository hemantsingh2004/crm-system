import express from "express";
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({ message: "Hello User API" });
});

export default router;
