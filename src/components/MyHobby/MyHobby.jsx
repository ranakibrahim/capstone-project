import "./MyHobby.scss";

export default function MyHobby({ id, name, image }) {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <article className="myhobby-card">
      <section className="myhobby-card__content">
        <img src={image} alt="hobby image" className="myhobby-card__image" />
        <h5 className="myhobby-card__title">{name}</h5>
      </section>
    </article>
  );
}
