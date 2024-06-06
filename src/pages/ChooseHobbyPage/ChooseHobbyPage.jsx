import Profile from "../../components/Profile/Profile";
import HobbiesList from "../../components/HobbiesList/HobbiesList";
import "./ChooseHobbyPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ChooseHobbyPage({ token, setToken }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
        <main className="hobbies">
          <Profile fname={user.first_name} token={token} setToken={setToken}/>
          <h1 className="hobbies__title">
            Hello,{" "}
            <span className="hobbies__username">
              {user.first_name}&nbsp;{user.last_name}
            </span>
          </h1>
          <HobbiesList />
        </main>
      ) : (
        <h2 className="invalid-session">You are logged out. Please <Link to="/login">login</Link> again.</h2>
      )}
    </>
  );
}
