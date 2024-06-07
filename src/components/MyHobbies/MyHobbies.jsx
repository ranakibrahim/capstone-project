import "./MyHobbies.scss";
import Flickity from "react-flickity-component";
import MyHobby from "../MyHobby/MyHobby";

export default function MyHobbies({ array }) {
  return (
    <section className="hobbies-carousel">
      <Flickity
        elementType="section"
        options={{ pageDots: true }}
        reloadOnUpdate
      >
        {array.map((item, index) => (
          <MyHobby
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
