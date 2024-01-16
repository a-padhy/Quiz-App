/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyQuestions } from "../data";

const Quiz = () => {
  const { exerciseId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    setQuestions(dummyQuestions[language]);
    setAnswers(new Array(dummyQuestions[language].length).fill(""));
  }, [language]);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
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
    setScore(userScore);
  };

  const answeredQuestions = answers.filter((answer) => answer !== "").length;
  const progress = (answeredQuestions / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Language: {language}</h2>
      <h3 className="text-xl font-bold mb-2">Quiz Questions:</h3>
      <div className="mb-4">
        <progress value={progress} max="100" className="w-full"></progress>
        <p className="text-center">{`${answeredQuestions} / ${questions.length} answered`}</p>
      </div>
      <form className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border p-4 rounded-md">
            <p className="text-lg mb-2">{question.text}</p>
            <p className="text-sm mb-2">
              Marks: {question.marks}, Difficulty: {question.difficulty}
            </p>
            {Object.entries(question.options).map(
              ([optionKey, optionValue]) => (
                <label key={optionKey} className="block mb-2">
                  <input
                    type="radio"
                    value={optionKey}
                    checked={answers[index] === optionKey}
                    onChange={() => handleAnswerChange(index, optionKey)}
                    className="mr-2"
                  />
                  {optionValue}
                </label>
              )
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={calculateScore}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {score !== null && (
        <p className="text-xl font-bold mt-4">Your Score: {score}</p>
      )}
    </div>
  );
};

export default Quiz;
