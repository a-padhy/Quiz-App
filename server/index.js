// TODO: no duplicate records in score
// put request in scores
// send exercise data in order

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/auth.js";
import { LanguageModel } from "./models/Language.js";
import { ExerciseModel } from "./models/Exercise.js";
import { ScoreModel } from "./models/Score.js";
import connectDB from "./db/connect.js";
import mongoose from "mongoose";
import { UserModel } from "./models/User.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/languages", async (req, res) => {
  try {
    const languages = await LanguageModel.find({});
    res.json(languages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/:id", async (req, res) => {
  const languageId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const exercises = await ExerciseModel.find({ language: languageId });
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/:exerciseId/questions", async (req, res) => {
  const exerciseId = req.params.exerciseId;
  try {
    const exercise = await ExerciseModel.findById(exerciseId);
    if (!exercise) return res.status(404).json({ error: "Exercise not found" });
    const questions = exercise.questions;
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/result/:userId/:exerciseId", async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;
    const userScore = await ScoreModel.find({
      user: userId,
      exercise: exerciseId,
    });
    res.json({ userScore });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/result/:exerciseId", async (req, res) => {
  const { answers, userId } = req.body;
  const exerciseId = req.params.exerciseId;
  try {
    const exercise = await ExerciseModel.findById(exerciseId);
    if (!exercise) return res.status(404).json({ error: "Exercise not found" });
    const questions = exercise.questions;
    let userScore = 0;
    questions.forEach((question, index) => {
      if (
        question.difficulty === "easy" &&
        answers[index] === question.correctAnswer
      ) {
        userScore += 1;
      } else if (
        question.difficulty === "medium" &&
        answers[index] === question.correctAnswer
      ) {
        userScore += 3;
      } else if (
        question.difficulty === "hard" &&
        answers[index] === question.correctAnswer
      ) {
        userScore += 5;
      }
    });
    const score = new ScoreModel({
      user: new mongoose.Types.ObjectId(userId),
      exercise: new mongoose.Types.ObjectId(exercise),
      score: userScore,
      answers: answers,
    });
    await score.save();
    const user = await UserModel.findById(userId);
    const languageId = exercise.language.toString();
    const languageProgressIndex = user.progress.findIndex(
      (progress) => progress.language.toString() === languageId
    );

    if (languageProgressIndex !== -1) {
      // If user has progress for the language, check if exercise is already completed
      const exerciseIndex = user.progress[
        languageProgressIndex
      ].completedExercises.findIndex(
        (completedExercise) => completedExercise.toString() === exerciseId
      );

      if (exerciseIndex !== -1) {
        // If the exercise is already completed, replace it
        user.progress[languageProgressIndex].completedExercises[exerciseIndex] =
          new mongoose.Types.ObjectId(exerciseId);
      } else {
        // If the exercise is not completed, add it
        user.progress[languageProgressIndex].completedExercises.push(
          new mongoose.Types.ObjectId(exerciseId)
        );
      }
    } else {
      // If no progress for the language, add a new entry
      user.progress.push({
        language: new mongoose.Types.ObjectId(languageId),
        completedExercises: [new mongoose.Types.ObjectId(exerciseId)],
      });
    }

    await user.save();
    res.json({ score: userScore });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/leaderboard/:languageId", async (req, res) => {
  const languageId = req.params.languageId;
  try {
    const scores = await ScoreModel.find().populate("user exercise");
    const scoresByLanguage = scores.filter(
      (score) => score.exercise.language.toString() === languageId
    );
    const scoreDetails = scoresByLanguage.map((score) => ({
      _id: score._id,
      user: {
        _id: score.user._id,
        username: score.user.username,
      },
      exercise: {
        _id: score.exercise._id,
        language: score.exercise.language,
      },
      score: score.score,
    }));
    res.json({ scoreDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findById(userId)
      .populate("progress.language")
      .populate("progress.completedExercises");
    const progressDetails = {
      _id: user._id,
      preferredLanguage: user.preferredLanguage,
      progress: user.progress.map((prog) => ({
        language: {
          _id: prog.language._id,
          name: prog.language.name,
        },
        completedExercises: prog.completedExercises.map((exercise) => ({
          _id: exercise._id,
          title: exercise.title,
        })),
      })),
    };
    res.json(progressDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(port, () => console.log(`listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
