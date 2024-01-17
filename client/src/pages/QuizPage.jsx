/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const { exerciseId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const userId = window.localStorage.getItem("userID");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`/${exerciseId}/questions`);
        setQuestions(response.data);
        setAnswers(new Array(questions.length).fill(""));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [exerciseId]);

  const handleAnswerChange = (index, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  const calculateScore = async () => {
    try {
      const response = await axios.post(`/result/${exerciseId}`, {
        answers,
        userId,
      });
      setScore(response.data);
      navigate(`/result/${exerciseId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const answeredQuestions = answers.filter(
    (answer) => answer !== "" && answer !== undefined
  ).length;
  const progress = (answeredQuestions / questions.length) * 100;
  console.log(answers);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <form className="space-y-4">
        {loading ? (
          <p className="text-center">Loading Questions</p>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-2">Quiz Questions:</h3>
            <div className="sticky top-0 bg-white">
              <div className="mb-4">
                <progress
                  value={progress}
                  max="100"
                  className="w-full"
                ></progress>
                <p className="text-center">{`${answeredQuestions} / ${questions.length} answered`}</p>
              </div>
            </div>
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
          </>
        )}
      </form>
      {/* {score !== null && (
        <p className="text-xl font-bold mt-4">Your Score: {score}</p>
      )} */}
    </div>
  );
};

export default Quiz;
