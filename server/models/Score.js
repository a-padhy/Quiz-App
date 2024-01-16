import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true,
  },
  score: { type: Number, required: true },
});

export const Score = mongoose.model("Score", scoreSchema);
