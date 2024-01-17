import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Leaderboard = () => {
  const [scoreDetails, setScoreDetails] = useState([]);
  const { languageId } = useParams();
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`/leaderboard/${languageId}`);
        setScoreDetails(response.data.scoreDetails);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, [languageId]);

  const userScores = {};
  scoreDetails.forEach((score) => {
    const userId = score.user._id;
    if (!userScores[userId]) {
      userScores[userId] = {
        username: score.user.username,
        totalScore: 0,
      };
    }
    userScores[userId].totalScore += score.score;
  });

  const sortedUsers = Object.values(userScores).sort(
    (a, b) => b.totalScore - a.totalScore
  );

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Rank</th>
            <th className="py-2 px-4 border">Username</th>
            <th className="py-2 px-4 border">Total Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{user.username}</td>
              <td className="py-2 px-4 border">{user.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
