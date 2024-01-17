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
