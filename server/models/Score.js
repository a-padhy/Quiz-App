import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  score: { type: Number, required: true },
  answers: [{ type: String }],
});

export const ScoreModel = mongoose.model("Score", scoreSchema);
