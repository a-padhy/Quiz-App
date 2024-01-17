/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LanguageSelection = ({ languages, loading }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl mb-4 text-center text-gray-800">
      Select a language to take the test:
    </h2>
    <div className="flex flex-wrap justify-center">
      {loading ? (
        <p>Loading Languages!</p>
      ) : (
        <div>
          {languages.map((language) => (
            <Link
              key={language._id}
              to={`/${language._id}`}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded m-2 transition duration-300 ease-in-out"
            >
              {language.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default LanguageSelection;
