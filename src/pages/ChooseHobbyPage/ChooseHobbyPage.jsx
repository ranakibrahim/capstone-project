import Profile from "../../components/Profile/Profile";
import HobbiesList from "../../components/HobbiesList/HobbiesList";
import "./ChooseHobbyPage.scss";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function ChooseHobbyPage({ token, setToken, user, setUser }) {
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
  if (user.numOfHobbies > 0) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      {user ? (
        <main className="hobbies">
          <Profile fname={user.first_name} token={token} setToken={setToken} />
          <h1 className="hobbies__title">
            Hello,{" "}
            <span className="hobbies__username">
              {user.first_name}&nbsp;{user.last_name}
            </span>
          </h1>
          <HobbiesList />
        </main>
      ) : (
        <h2 className="invalid-session">
          Access Denied. Please <Link to="/login">login</Link> here.
        </h2>
      )}
    </>
  );
}
