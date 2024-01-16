import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  questions: [
    {
      text: { type: String, required: true },
      options: {
        optionA: String,
        optionB: String,
        optionC: String,
        optionD: String,
      },
      correctAnswer: { type: String, required: true },
      marks: { type: Number, required: true },
      difficulty: { type: String, required: true },
    },
  ],
});

export const ExerciseModel = mongoose.model("Exercise", exerciseSchema);
