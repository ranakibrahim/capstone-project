import "./DashboardPage.scss";
import Profile from "../../components/Profile/Profile";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

export default function DashboardPage({ token, setToken, user, setUser }) {
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
  return (
    <>
      {user ? (
        <main className="dashboard">
          <Profile fname={user.first_name} token={token} setToken={setToken} />
          <ProfileInfo user={user}/>
        </main>
      ) : (
        <h2 className="invalid-session">
          You are logged out. Please <Link to="/login">login</Link> again.
        </h2>
      )}
    </>
  );
}
