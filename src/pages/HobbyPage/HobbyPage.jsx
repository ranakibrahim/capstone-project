import { useParams } from "react-router-dom";
import "./HobbyPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../components/Profile/Profile";

export default function HobbyPage({ token, setToken, user, setUser }) {
  const { hobbyId } = useParams();
  const [currentHobbyData, setCurrentHobbyData] = useState({});
  const [activeHobbyId, setActiveHobbyId] = useState(hobbyId);
  
  useEffect(() => {
    async function getProfile() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_USERS}/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setUser(data);
    }
    if (token) {
      getProfile();
    } else {
      setUser(null);
    }
  }, [token]);
  
  useEffect(() => {
    setActiveHobbyId(hobbyId);
  }, [hobbyId]);

  useEffect(() => {
    async function getCurrentHobbyData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/id/${hobbyId}`
        );
        setCurrentHobbyData(response.data[0]);
      } catch (e) {
        console.log(e);
      }
    }
    getCurrentHobbyData();
  }, [activeHobbyId]);

  return (
    <main className="hobby-page">
      <Profile fname={user.first_name} token={token} setToken={setToken} />
    </main>
  );
}
