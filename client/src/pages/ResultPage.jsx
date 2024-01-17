import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResultPage = () => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = window.localStorage.getItem("userID");
  const { exerciseId } = useParams();
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(`/result/${userId}/${exerciseId}`);
        setScore(response.data.userScore[0].score);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchScores();
  }, []);
  return (
    <div className="text-center">
      {loading ? (
        <p>Loading Score!</p>
      ) : (
        <div>Your Score is : {`${score}`}</div>
      )}
    </div>
  );
};

export default ResultPage;
