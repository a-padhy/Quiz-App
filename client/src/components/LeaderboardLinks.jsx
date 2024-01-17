/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LeaderboardLinks = ({ languages, loading }) => (
  <div className="container mx-auto p-8">
    <h1 className="text-2xl  mb-4 text-center text-gray-800">
      Check Leaderboard in the following languages
    </h1>

    {loading ? (
      <p>Loading Languages!</p>
    ) : (
      <div className="flex flex-wrap justify-center">
        {languages.map((language) => (
          <Link
            key={language._id}
            to={`/leaderboard/${language._id}`}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded m-2 transition duration-300 ease-in-out"
          >
            {language.name}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default LeaderboardLinks;
