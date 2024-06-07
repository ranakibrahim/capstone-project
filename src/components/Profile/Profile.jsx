import "./Profile.scss";
import profileIcon from "../../assets/icons/profile2-icon.svg";
import { Link, NavLink } from "react-router-dom";

export default function Profile({ fname, token, setToken }) {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };
  return (
    <section className="profile">
      <section className="profile__info">
        <img src={profileIcon} alt="profile icon" className="profile__icon" />
        <section>
          <span className="profile__username">{fname}</span>
        </section>
      </section>
      <nav className="profile__nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      </nav>
    </section>
  );
}
