import { LanguageModel } from "./models/Language.js";
import { ExerciseModel } from "./models/Exercise.js";
import connectDB from "./db/connect.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

connectDB(process.env.MONGO_URI);
const sampleLanguages = [
  { name: "English" },
  { name: "Hindi" },
  { name: "Spanish" },
  { name: "French" },
];

const populateLanguages = async () => {
  try {
    await LanguageModel.deleteMany({});
    const insertedLanguages = await LanguageModel.insertMany(sampleLanguages);
    console.log("Languages inserted:", insertedLanguages);
  } catch (error) {
    console.error("Error populating languages:", error);
  } finally {
    mongoose.connection.close();
  }
};

const sampleExercises = [
  {
    title: "Exercise 1",
    language: new mongoose.Types.ObjectId("65a6d28028bef6e81b265667"),
    difficulty: "easy",
    questions: [
      {
        text: "What is the capital of England?",
        options: {
          optionA: "London",
          optionB: "Paris",
          optionC: "Berlin",
          optionD: "Madrid",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Which river runs through London?",
        options: {
          optionA: "Thames",
          optionB: "Seine",
          optionC: "Danube",
          optionD: "Tiber",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who is the author of 'Romeo and Juliet'?",
        options: {
          optionA: "Charles Dickens",
          optionB: "Jane Austen",
          optionC: "William Shakespeare",
          optionD: "Mark Twain",
        },
        correctAnswer: "optionC",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "In which year did the Titanic sink?",
        options: {
          optionA: "1905",
          optionB: "1912",
          optionC: "1920",
          optionD: "1931",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "What is the largest planet in our solar system?",
        options: {
          optionA: "Earth",
          optionB: "Jupiter",
          optionC: "Mars",
          optionD: "Venus",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "Who painted the Mona Lisa?",
        options: {
          optionA: "Vincent van Gogh",
          optionB: "Pablo Picasso",
          optionC: "Leonardo da Vinci",
          optionD: "Claude Monet",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the currency of Japan?",
        options: {
          optionA: "Yen",
          optionB: "Won",
          optionC: "Baht",
          optionD: "Dollar",
        },
        correctAnswer: "optionA",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "Which scientist developed the theory of general relativity?",
        options: {
          optionA: "Isaac Newton",
          optionB: "Niels Bohr",
          optionC: "Albert Einstein",
          optionD: "Marie Curie",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the capital of Australia?",
        options: {
          optionA: "Canberra",
          optionB: "Sydney",
          optionC: "Melbourne",
          optionD: "Brisbane",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          optionA: "Harper Lee",
          optionB: "J.K. Rowling",
          optionC: "George Orwell",
          optionD: "Ernest Hemingway",
        },
        correctAnswer: "optionA",
        difficulty: "medium",
        marks: 3,
      },
    ],
  },
  {
    title: "Exercise 2",
    language: new mongoose.Types.ObjectId("65a6d28028bef6e81b265667"),
    difficulty: "medium",
    questions: [
      {
        text: "What is the capital of England?",
        options: {
          optionA: "London",
          optionB: "Paris",
          optionC: "Berlin",
          optionD: "Madrid",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Which river runs through London?",
        options: {
          optionA: "Thames",
          optionB: "Seine",
          optionC: "Danube",
          optionD: "Tiber",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who is the author of 'Romeo and Juliet'?",
        options: {
          optionA: "Charles Dickens",
          optionB: "Jane Austen",
          optionC: "William Shakespeare",
          optionD: "Mark Twain",
        },
        correctAnswer: "optionC",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "In which year did the Titanic sink?",
        options: {
          optionA: "1905",
          optionB: "1912",
          optionC: "1920",
          optionD: "1931",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "What is the largest planet in our solar system?",
        options: {
          optionA: "Earth",
          optionB: "Jupiter",
          optionC: "Mars",
          optionD: "Venus",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "Who painted the Mona Lisa?",
        options: {
          optionA: "Vincent van Gogh",
          optionB: "Pablo Picasso",
          optionC: "Leonardo da Vinci",
          optionD: "Claude Monet",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the currency of Japan?",
        options: {
          optionA: "Yen",
          optionB: "Won",
          optionC: "Baht",
          optionD: "Dollar",
        },
        correctAnswer: "optionA",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "Which scientist developed the theory of general relativity?",
        options: {
          optionA: "Isaac Newton",
          optionB: "Niels Bohr",
          optionC: "Albert Einstein",
          optionD: "Marie Curie",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the capital of Australia?",
        options: {
          optionA: "Canberra",
          optionB: "Sydney",
          optionC: "Melbourne",
          optionD: "Brisbane",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          optionA: "Harper Lee",
          optionB: "J.K. Rowling",
          optionC: "George Orwell",
          optionD: "Ernest Hemingway",
        },
        correctAnswer: "optionA",
        difficulty: "medium",
        marks: 3,
      },
    ],
  },
  {
    title: "Exercise 3",
    language: new mongoose.Types.ObjectId("65a6d28028bef6e81b265667"),
    difficulty: "hard",
    questions: [
      {
        text: "What is the capital of England?",
        options: {
          optionA: "London",
          optionB: "Paris",
          optionC: "Berlin",
          optionD: "Madrid",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Which river runs through London?",
        options: {
          optionA: "Thames",
          optionB: "Seine",
          optionC: "Danube",
          optionD: "Tiber",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who is the author of 'Romeo and Juliet'?",
        options: {
          optionA: "Charles Dickens",
          optionB: "Jane Austen",
          optionC: "William Shakespeare",
          optionD: "Mark Twain",
        },
        correctAnswer: "optionC",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "In which year did the Titanic sink?",
        options: {
          optionA: "1905",
          optionB: "1912",
          optionC: "1920",
          optionD: "1931",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "What is the largest planet in our solar system?",
        options: {
          optionA: "Earth",
          optionB: "Jupiter",
          optionC: "Mars",
          optionD: "Venus",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "Who painted the Mona Lisa?",
        options: {
          optionA: "Vincent van Gogh",
          optionB: "Pablo Picasso",
          optionC: "Leonardo da Vinci",
          optionD: "Claude Monet",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the currency of Japan?",
        options: {
          optionA: "Yen",
          optionB: "Won",
          optionC: "Baht",
          optionD: "Dollar",
        },
        correctAnswer: "optionA",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "Which scientist developed the theory of general relativity?",
        options: {
          optionA: "Isaac Newton",
          optionB: "Niels Bohr",
          optionC: "Albert Einstein",
          optionD: "Marie Curie",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the capital of Australia?",
        options: {
          optionA: "Canberra",
          optionB: "Sydney",
          optionC: "Melbourne",
          optionD: "Brisbane",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          optionA: "Harper Lee",
          optionB: "J.K. Rowling",
          optionC: "George Orwell",
          optionD: "Ernest Hemingway",
        },
        correctAnswer: "optionA",
        difficulty: "medium",
        marks: 3,
      },
    ],
  },
  {
    title: "Exercise 4",
    language: new mongoose.Types.ObjectId("65a6d28028bef6e81b265667"),
    difficulty: "easy",
    questions: [
      {
        text: "What is the capital of England?",
        options: {
          optionA: "London",
          optionB: "Paris",
          optionC: "Berlin",
          optionD: "Madrid",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Which river runs through London?",
        options: {
          optionA: "Thames",
          optionB: "Seine",
          optionC: "Danube",
          optionD: "Tiber",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who is the author of 'Romeo and Juliet'?",
        options: {
          optionA: "Charles Dickens",
          optionB: "Jane Austen",
          optionC: "William Shakespeare",
          optionD: "Mark Twain",
        },
        correctAnswer: "optionC",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "In which year did the Titanic sink?",
        options: {
          optionA: "1905",
          optionB: "1912",
          optionC: "1920",
          optionD: "1931",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "What is the largest planet in our solar system?",
        options: {
          optionA: "Earth",
          optionB: "Jupiter",
          optionC: "Mars",
          optionD: "Venus",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "Who painted the Mona Lisa?",
        options: {
          optionA: "Vincent van Gogh",
          optionB: "Pablo Picasso",
          optionC: "Leonardo da Vinci",
          optionD: "Claude Monet",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the currency of Japan?",
        options: {
          optionA: "Yen",
          optionB: "Won",
          optionC: "Baht",
          optionD: "Dollar",
        },
        correctAnswer: "optionA",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "Which scientist developed the theory of general relativity?",
        options: {
          optionA: "Isaac Newton",
          optionB: "Niels Bohr",
          optionC: "Albert Einstein",
          optionD: "Marie Curie",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the capital of Australia?",
        options: {
          optionA: "Canberra",
          optionB: "Sydney",
          optionC: "Melbourne",
          optionD: "Brisbane",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          optionA: "Harper Lee",
          optionB: "J.K. Rowling",
          optionC: "George Orwell",
          optionD: "Ernest Hemingway",
        },
        correctAnswer: "optionA",
        difficulty: "medium",
        marks: 3,
      },
    ],
  },
  {
    title: "Exercise 5",
    language: new mongoose.Types.ObjectId("65a6d28028bef6e81b265667"),
    difficulty: "medium",
    questions: [
      {
        text: "What is the capital of England?",
        options: {
          optionA: "London",
          optionB: "Paris",
          optionC: "Berlin",
          optionD: "Madrid",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Which river runs through London?",
        options: {
          optionA: "Thames",
          optionB: "Seine",
          optionC: "Danube",
          optionD: "Tiber",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who is the author of 'Romeo and Juliet'?",
        options: {
          optionA: "Charles Dickens",
          optionB: "Jane Austen",
          optionC: "William Shakespeare",
          optionD: "Mark Twain",
        },
        correctAnswer: "optionC",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "In which year did the Titanic sink?",
        options: {
          optionA: "1905",
          optionB: "1912",
          optionC: "1920",
          optionD: "1931",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "What is the largest planet in our solar system?",
        options: {
          optionA: "Earth",
          optionB: "Jupiter",
          optionC: "Mars",
          optionD: "Venus",
        },
        correctAnswer: "optionB",
        difficulty: "medium",
        marks: 3,
      },
      {
        text: "Who painted the Mona Lisa?",
        options: {
          optionA: "Vincent van Gogh",
          optionB: "Pablo Picasso",
          optionC: "Leonardo da Vinci",
          optionD: "Claude Monet",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the currency of Japan?",
        options: {
          optionA: "Yen",
          optionB: "Won",
          optionC: "Baht",
          optionD: "Dollar",
        },
        correctAnswer: "optionA",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "Which scientist developed the theory of general relativity?",
        options: {
          optionA: "Isaac Newton",
          optionB: "Niels Bohr",
          optionC: "Albert Einstein",
          optionD: "Marie Curie",
        },
        correctAnswer: "optionC",
        difficulty: "hard",
        marks: 5,
      },
      {
        text: "What is the capital of Australia?",
        options: {
          optionA: "Canberra",
          optionB: "Sydney",
          optionC: "Melbourne",
          optionD: "Brisbane",
        },
        correctAnswer: "optionA",
        difficulty: "easy",
        marks: 1,
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          optionA: "Harper Lee",
          optionB: "J.K. Rowling",
          optionC: "George Orwell",
          optionD: "Ernest Hemingway",
        },
        correctAnswer: "optionA",
        difficulty: "medium",
        marks: 3,
      },
    ],
  },
];

const populateExercises = async () => {
  try {
    await ExerciseModel.deleteMany({});
    const insertedExercises = await ExerciseModel.insertMany(sampleExercises);
    console.log("Exercises inserted:", insertedExercises);
  } catch (error) {
    console.error("Error populating Exercises:", error);
  } finally {
    mongoose.connection.close();
  }
};

populateExercises();
