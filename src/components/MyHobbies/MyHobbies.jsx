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
          <div className="hobby-wrapper" key={index}>
            <MyHobby
              id={item.id}
              name={item.hobby_name}
              image={item.image}
            />
          </div>
        ))}
      </Flickity>
    </section>
  );
}
