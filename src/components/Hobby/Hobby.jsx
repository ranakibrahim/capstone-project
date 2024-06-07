import React from "react";
import "./Hobby.scss";

export default function Hobby({ id, name, image, desc, isChecked, onChecked }) {
  const handleClick = () => {
    onChecked(id);
  };
  return (
    <article className="hobby-card">
      <section className="hobby-card__content">
        <img
          src={image}
          alt="hobby image"
          className="hobby-card__image"
        />
        <h5 className="hobby-card__title">{name}</h5>
        <p className="hobby-card__description">{desc}</p>
      </section>
      <span className="hobby-card__choose" onClick={handleClick}>
        {isChecked ? <span className="hobby-card__checked"></span> : null}
      </span>
    </article>
  );
}
