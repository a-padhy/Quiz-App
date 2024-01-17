// if profile khali then do
import { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../components/UserProfile";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = window.localStorage.getItem("userID");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/profile/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <UserProfile loading={loading} profile={profile} />
    </>
  );
};

export default ProfilePage;

// return (
//   <div className="container mx-auto mt-8 p-4">
//     {loading ? (
//       <p className="text-center text-gray-600">Loading Profile...</p>
//     ) : (
//       <div>
//         <h1 className="text-3xl font-bold mb-4">User Profile</h1>
//         <h2 className="text-2xl font-bold mb-2">Progress</h2>
//         {profile.progress.map((prog) => (
//           <div key={prog.language._id} className="mb-4">
//             <h3 className="text-xl font-semibold mb-2">
//               Language: {prog.language.name}
//             </h3>
//             <h4 className="text-lg mb-2">
//               You have completed the below exercises:
//             </h4>
//             <ul className="flex gap-4">
//               {prog.completedExercises.map((exercise) => (
//                 <li
//                   key={exercise._id}
//                   className="bg-blue-300 p-2 rounded-md mb-2"
//                 >
//                   {exercise.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     )}
//     <div>your preferredLanguage is {`${preferredLanguage}`}</div>
//   </div>
// );
