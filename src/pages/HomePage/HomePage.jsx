import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import NavBar from "../../components/NavBar/NavBar";
import potteryImage from "../../assets/images/pottery.jpg";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <main className="more-info">
        <h2 className="more-info__title">Who are we?</h2>
        <img
          src={potteryImage}
          alt="black and white image of a person making a pottery piece"
          className="more-info__image"
        />
        <p className="more-info__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          necessitatibus eum vitae sint aut quidem earum officiis fugiat,
          ratione expedita in maiores sunt nisi cupiditate adipisci ut harum
          ducimus laudantium illum, nihil odit deleniti amet illo rem.
        </p>
      </main>

      <section className="howtouse">
        <h2 className="howtouse__title">
          How you can use <br /> <span>Hobby Hopper</span>
        </h2>
        <div className="howtouse__wrapper">
          <article className="howtouse__box">
            <h3>Tracking app</h3>
            <p>
              all your hobbies in one app makes it easier for you to know what
              you're doing
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
