/* eslint-disable react/prop-types */
import UserProfileProgress from "./UserProfileProgress";

const UserProfile = ({ loading, profile }) => (
  <div className="container mx-auto mt-8 p-4">
    {loading ? (
      <p className="text-center text-gray-600 mt-20">Loading Profile...</p>
    ) : (
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">User Profile</h1>

        <h2 className="text-2xl font-bold mb-2">Progress</h2>
        {profile.progress.length > 0 ? (
          profile.progress.map((prog) => (
            <UserProfileProgress key={prog.language._id} progress={prog} />
          ))
        ) : (
          <p className="text-lg mb-4">No exercises completed yet.</p>
        )}

        <h2 className="text-2xl font-bold mb-2">Preferred Language</h2>
        <p className="text-lg mb-4">
          Your preferred language is: {profile.preferredLanguage}
        </p>
      </div>
    )}
  </div>
);

export default UserProfile;
