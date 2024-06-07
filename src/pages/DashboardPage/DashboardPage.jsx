import "./DashboardPage.scss";
import Profile from "../../components/Profile/Profile";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import MyHobbies from "../../components/MyHobbies/MyHobbies";

export default function DashboardPage({ token, setToken, user, setUser }) {
  const [hobbies, setHobbies] = useState([]);

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
    async function getHobbies() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_USERS}/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHobbies(data);
    }
    if(token) {
      getHobbies();
    } else {
      setHobbies([]);
    }
  }, []);

  return (
    <>
      {user ? (
        <main className="dashboard">
          <Profile fname={user.first_name} token={token} setToken={setToken} />
          <ProfileInfo user={user} />
          <MyHobbies array={hobbies}/>
        </main>
      ) : (
        <h2 className="invalid-session">
          Access Denied. Please <Link to="/login">login</Link> here.
        </h2>
      )}
    </>
  );
}
