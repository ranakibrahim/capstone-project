import "./Carousel.scss";
import Flickity from "react-flickity-component";
import Hobby from "../Hobby/Hobby";

export default function Carousel({ array }) {
  return (
    <section className="hobbies-carousel">
      <Flickity
        elementType="section"
        options={{ pageDots: true }}
        reloadOnUpdate
      >
        {array.map((item, index) => (
          <Hobby
            key={index}
            id={item.id}
            name={item.hobby_name}
            image={item.image}
          />
        ))}
      </Flickity>
    </section>
  );
}
