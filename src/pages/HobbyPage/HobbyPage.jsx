import { Link, useParams } from "react-router-dom";
import "./HobbyPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../components/Profile/Profile";
import arrowIcon from "../../assets/icons/arrow-back.svg";
import MyNotes from "../../components/MyNotes/MyNotes";

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
      <section className="hobby-page__sections">
        <section className="hobby-page__section">
          <section className="hobby-page__card">
            <section className="hobby-page__back-title">
              <Link to="/dashboard">
                <img src={arrowIcon} alt="arrow icon" />
              </Link>
              <h1 className="hobby-page__title">
                {currentHobbyData.hobby_name}
              </h1>
            </section>
            <img
              src={currentHobbyData.image}
              alt={currentHobbyData.hobby_name}
              className="hobby-page__image"
            />
            <p className="hobby-page__desc">
              {currentHobbyData.hobby_description}
            </p>
            <span className="hobby-page__link">
              Link:{" "}
              <a href={currentHobbyData.hobby_wiki}>
                {currentHobbyData.hobby_wiki}
              </a>
            </span>
          </section>
        </section>

        <section className="hobby-page__section">
          <h1 className="hobby-page__subtitle">
            My notes for{" "}
            <span className="hobby-page__emphasized">
              {currentHobbyData.hobby_name}
            </span>
          </h1>
          <MyNotes />
        </section>

        <section className="hobby-page__section">
          <h1 className="hobby-page__subtitle">
            My pictures for{" "}
            <span className="hobby-page__emphasized">
              {currentHobbyData.hobby_name}
            </span>
          </h1>
        </section>
      </section>
    </main>
  );
}
