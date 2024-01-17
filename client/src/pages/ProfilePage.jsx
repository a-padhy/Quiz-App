import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return <div>Profile Page</div>;
};

export default ProfilePage;
