import "./Footer.scss";
import xIcon from "../../assets/icons/x-icon.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__sections-socials">
        <section className="footer__socials">
          <h3 className="footer__logo">Hobby Hopper</h3>
          <section className="footer__social-media">
            <img src={xIcon} alt="x icon" className="footer__icon" />
            <img src={youtubeIcon} alt="x icon" className="footer__icon" />
            <img src={instagramIcon} alt="x icon" className="footer__icon" />
            <img src={facebookIcon} alt="x icon" className="footer__icon" />
          </section>
        </section>
        <section className="footer__sections">
          <section className="footer__about-section">
            <h4 className="footer__title">ABOUT</h4>
            <ul className="footer__list">
              <li className="footer__item">About</li>
              <li className="footer__item">About</li>
              <li className="footer__item">About</li>
            </ul>
          </section>
          <section className="footer__contact-section">
            <h4 className="footer__title">CONTACT</h4>
            <ul className="footer__list">
              <li className="footer__item">Contact</li>
              <li className="footer__item">Contact</li>
              <li className="footer__item">Contact</li>
            </ul>
          </section>
          <section className="footer__mission-section">
            <h4 className="footer__title">MISSION</h4>
            <ul className="footer__list">
              <li className="footer__item">Mission</li>
              <li className="footer__item">Mission</li>
              <li className="footer__item">Mission</li>
            </ul>
          </section>
          <section className="footer__courses-section">
            <h4 className="footer__title">COURSES</h4>
            <ul className="footer__list">
              <li className="footer__item">Courses</li>
              <li className="footer__item">Courses</li>
              <li className="footer__item">Courses</li>
            </ul>
          </section>
        </section>
      </section>
      <section className="footer__copyrights">
        All rights reserved © Hoppy Hopper 2024
      </section>
    </footer>
  );
}
