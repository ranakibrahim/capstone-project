import "./Profile.scss";
import profileIcon from "../../assets/icons/profile2-icon.svg";
import { Link } from "react-router-dom";

export default function Profile({ fname, token, setToken }) {
  const handleLogout = () => {
    sessionStorage.removeItem("token")
    setToken(null);
  }
  return (
    <section className="profile">
      <img src={profileIcon} alt="profile icon" className="profile__icon" />
      <section>
        <span className="profile__username">{fname}</span>
        &nbsp;&nbsp;|&nbsp; &nbsp;
        <Link to="/" className="profile__logout" onClick={handleLogout}>
          Logout
        </Link>
      </section>
    </section>
  );
}
