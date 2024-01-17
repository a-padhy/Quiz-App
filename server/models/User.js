import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferredLanguage: { type: String, required: true },
  progress: [
    {
      language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        required: true,
      },
      completedExercises: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
      ],
    },
  ],
});

export const UserModel = mongoose.model("User", userSchema);
