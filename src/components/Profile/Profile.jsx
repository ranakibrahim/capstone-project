import "./Profile.scss";
import profileIcon from "../../assets/icons/profile2-icon.svg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="profile">
      <img src={profileIcon} alt="profile icon" className="profile__icon" />
      <section>
        <span className="profile__username">Jane</span>
        &nbsp;&nbsp;|&nbsp; &nbsp;
        <Link to="/" className="profile__logout">
          Logout
        </Link>
      </section>
    </section>
  );
}
