import Hobby from "../Hobby/Hobby";
import "./HobbiesList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HobbiesList() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    getHobbies();
  }, []);

  const getHobbies = async () => {
    const response = await axios.get(import.meta.env.VITE_API);
    setHobbies(response.data);
  };
  return (
    <section className="hobbies-list">
      <h2 className="hobbies-list__title">Choose your hobbies</h2>
      <section className="hobbies-list__all-hobbies">
        {hobbies.map((hobby) => (
          <Hobby
            key={hobby.id}
            id={hobby.id}
            name={hobby.hobby_name}
            desc={hobby.hobby_description}
            wiki={hobby.hobby_wiki}
          />
        ))}
      </section>
    </section>
  );
}
