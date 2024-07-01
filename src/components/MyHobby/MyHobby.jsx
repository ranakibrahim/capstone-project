import { Link } from "react-router-dom";
import "./MyHobby.scss";
import deleteIcon from "../../assets/icons/delete-icon.svg";

export default function MyHobby({ id, name, image }) {
  return (
    <>
      <img src={deleteIcon} alt="delete icon" className="delete-icon"/>
      <Link to={`/hobby/${id}`} className="link">
        <article className="myhobby-card">
          <section className="myhobby-card__content">
            <img
              src={image}
              alt="hobby image"
              className="myhobby-card__image"
            />
            <section>
              <h5 className="myhobby-card__title">{name}</h5>
              <section className="myhobby-card__actions"></section>
            </section>
          </section>
        </article>
      </Link>
    </>
  );
}
