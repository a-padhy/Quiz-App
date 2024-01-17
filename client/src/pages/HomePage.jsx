import { useEffect, useState } from "react";
import axios from "axios";
import Instructions from "../components/Instructions";
import LanguageSelection from "../components/LanguageSelection";
import LeaderboardLinks from "../components/LeaderboardLinks";

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
      <div className="text-3xl mb-4 text-center text-gray-800">
        Hello {user}
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Language Learning Quiz
      </h1>
      <div className="flex items-center justify-center flex-col">
        {/* <div className="flex items-center"> */}
        <LanguageSelection languages={languages} loading={loading} />
        <LeaderboardLinks languages={languages} loading={loading} />
        {/* </div> */}
        <Instructions />
      </div>
    </div>
  );
};

export default HomePage;
