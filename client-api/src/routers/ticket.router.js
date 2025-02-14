import express from "express";
const router = express.Router();
import { userAuthorization } from "../middlewares/authorization.middleware.js";
import { insertTicket } from "../model/ticket/ticket.model.js";

router.all("/", (req, res, next) => {
  next();
});

router.post("/", userAuthorization, async (req, res) => {
  try {
    const { subject, sender, message } = req.body;
    const clientId = req.userId;
    const ticketObj = {
      clientId,
      subject,
      conversation: [
        {
          sender,
          message,
        },
      ],
    };
    const ticket = await insertTicket(ticketObj);
    if (ticket && ticket._id) {
      return res.json({ message: "Ticket created successfully", ticket });
    }
    return res.status(500).json({ message: "Unable to create ticket" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Ticket already exist" });
    }
    return res.status(500).json({ message: error.message });
  }
});

export default router;
