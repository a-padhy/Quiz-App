/* eslint-disable react/prop-types */

const UserProfileProgress = ({ progress }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">
      Language: {progress.language.name}
    </h3>
    <h4 className="text-lg mb-2">You have completed the below exercises:</h4>
    <ul className="flex gap-4">
      {progress.completedExercises.map((exercise) => (
        <li key={exercise._id} className="bg-blue-300 p-2 rounded-md mb-2">
          {exercise.title}
        </li>
      ))}
    </ul>
  </div>
);

export default UserProfileProgress;
