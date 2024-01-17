import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = window.localStorage.getItem("userID");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`/profile/${userId}`);
        setProgress(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      {loading ? (
        <p className="text-center text-gray-600">Loading Profile...</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">User Profile</h1>
          <h2 className="text-2xl font-bold mb-2">Progress</h2>
          {progress.progress.map((prog) => (
            <div key={prog.language._id} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                Language: {prog.language.name}
              </h3>
              <h4 className="text-lg mb-2">
                You have completed the below exercises:
              </h4>
              <ul className="flex gap-4">
                {prog.completedExercises.map((exercise) => (
                  <li
                    key={exercise._id}
                    className="bg-blue-300 p-2 rounded-md mb-2"
                  >
                    {exercise.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
