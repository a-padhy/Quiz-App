import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Instructions from "../components/Instructions";

const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = window.localStorage.getItem("username");

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("/languages");
        setLanguages(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);
  return (
    <div className="bg-white text-black h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Hello {`${user}`}</h1>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Language Learning Quiz
      </h1>
      <div className="flex items-center justify-">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Select a language to take the test:</h2>
          <div>
            {loading ? (
              <p>Loading Languages!</p>
            ) : (
              <div>
                {languages.map((language) => (
                  <Link
                    key={language._id}
                    to={`/${language._id}`}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-4"
                  >
                    {language.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Instructions />
          <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">
              Check Leaderboard in the following languages
            </h1>

            {loading ? (
              <p>Loading Languages!</p>
            ) : (
              <div className="flex flex-wrap gap-4">
                {languages.map((language) => (
                  <Link
                    key={language._id}
                    to={`/leaderboard/${language._id}`}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    {language.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
