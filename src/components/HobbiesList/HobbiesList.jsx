import Hobby from "../Hobby/Hobby";
import "./HobbiesList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HobbiesList() {
  const [hobbies, setHobbies] = useState([]);
  const [chosenHobbyIds, setChosenHobbyIds] = useState([]);
  const [checkedState, setCheckedState] = useState({});

  useEffect(() => {
    getHobbies();
  }, []);

  const getHobbies = async () => {
    const response = await axios.get(import.meta.env.VITE_API);
    setHobbies(response.data);
    const initialCheckedState = {};

    response.data.forEach((hobby) => {
      initialCheckedState[hobby.id] = false;
    });
    setCheckedState(initialCheckedState);
  };
  const handleChecked = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setChosenHobbyIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((hobbyId) => hobbyId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(chosenHobbyIds);

    //make axios call
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_USERS}/choose-hobbies`,
        { hobbyids: chosenHobbyIds },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data");
    }

    setCheckedState({});
    setChosenHobbyIds([]);
  };

  return (
    <section className="hobbies-list">
      <form onSubmit={handleSubmit} className="hobbies-list__form">
        <button type="submit" className="hobbies-list__submit">
          Submit
        </button>
      </form>
      <h2 className="hobbies-list__title">Choose your hobbies</h2>
      <section className="hobbies-list__all-hobbies">
        {hobbies.map((hobby) => (
          <Hobby
            key={hobby.id}
            id={hobby.id}
            name={hobby.hobby_name}
            image={hobby.image}
            desc={hobby.hobby_description}
            wiki={hobby.hobby_wiki}
            onChecked={handleChecked}
            isChecked={checkedState[hobby.id]}
          />
        ))}
      </section>
    </section>
  );
}
