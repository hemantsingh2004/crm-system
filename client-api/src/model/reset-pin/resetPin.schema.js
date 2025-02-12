import mongoose from "mongoose";

const resetPinSchema = new mongoose.Schema({
  email: {
    type: String,
    maxLength: 50,
    required: true,
  },
  pin: {
    type: String,
    maxLength: 6,
    minLength: 6,
    required: true,
  },
});

export default mongoose.model("resetPin", resetPinSchema);
