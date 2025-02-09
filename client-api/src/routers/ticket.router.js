import express from "express";
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({ message: "Hello Ticket API" });
});

export default router;
