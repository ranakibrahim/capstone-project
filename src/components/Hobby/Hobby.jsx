import React from "react";
import placeholderImg from "../../assets/images/placeholder.png";
import "./Hobby.scss";

export default function Hobby({ id, name, desc }) {
  return (
    <article className="hobby-card">
      <img
        src={placeholderImg}
        alt="hobby image"
        className="hobby-card__image"
      />
      <h5 className="hobby-card__title">{name}</h5>
      <p className="hobby-card__description">{desc}</p>
    </article>
  );
}
