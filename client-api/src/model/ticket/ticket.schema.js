import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "true",
  },
  subject: {
    type: String,
    maxLength: 100,
    required: "true",
    default: "",
  },
  status: {
    type: String,
    maxLength: 100,
    required: "true",
    default: "Pending Operator response",
  },
  addedAt: {
    type: Date,
    required: "true",
    default: Date.now,
  },
  conversation: [
    {
      date: {
        type: Date,
        required: "true",
        default: Date.now,
      },
      message: {
        type: String,
        required: "true",
        default: "",
      },
      sender: {
        type: String,
        maxLength: 50,
        required: "true",
        default: "",
      },
    },
  ],
});

ticketSchema.index({ clientId: 1, subject: 1 }, { unique: true });

export default mongoose.model("ticket", ticketSchema);
