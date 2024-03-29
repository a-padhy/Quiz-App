/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";

const Exercises = () => {
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["access_token"]);
  const { languageId } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        if (!cookies.access_token) {
          return navigate("/login");
        }
        const response = await axios.get(`/${languageId}`);
        setExercises(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, [languageId, cookies.access_token, navigate]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Choose an Exercise</h2>
      <ul className="space-y-4">
        {loading ? (
          <p>Loading Exercises</p>
        ) : (
          <>
            {exercises.length > 0 ? (
              exercises.map((exercise) => (
                <li key={exercise._id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold">{exercise.title}</h3>
                      <p className="text-sm mb-2">
                        Difficulty: {exercise.difficulty}
                      </p>
                    </div>
                    <Link
                      to={`/${languageId}/exercise/${exercise._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
                    >
                      Start Exercise
                    </Link>
                  </div>
                </li>
              ))
            ) : (
              <p>No exercises added</p>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Exercises;
