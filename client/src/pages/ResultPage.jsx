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
        <p className="text-xl font-bold text-stone-700">Loading Score...</p>
      ) : (
        <div className="mt-8">
          <p className="text-3xl font-bold text-stone-500">
            Your Score is: {`${score}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
