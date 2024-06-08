import React from "react";
import "./Hobby.scss";
import checkIcon from "../../assets/icons/check.svg";

export default function Hobby({ id, name, image, desc, isChecked, onChecked }) {
  const handleClick = () => {
    onChecked(id);
  };
  return (
    <article className="hobby-card" onClick={handleClick}>
      <section className="hobby-card__content">
        <img src={image} alt="hobby image" className="hobby-card__image" />
        <h5 className="hobby-card__title">{name}</h5>
        <p className="hobby-card__description">{desc}</p>
      </section>
      <span className="hobby-card__choose" >
        {isChecked ? <img src={checkIcon} alt="check mark" /> : null}
      </span>
    </article>
  );
}
