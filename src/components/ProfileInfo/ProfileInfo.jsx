import "./ProfileInfo.scss";
import profileIcon from "../../assets/icons/profile2-icon.svg";

export default function ProfileInfo({ user }) {
  return (
    <section className="profile-info">
      <img
        src={profileIcon}
        alt="profile icon"
        className="profile-info__icon"
      />
      <h1 className="profile-info__name">
        {user.first_name}&nbsp;{user.last_name}
      </h1>
      <h2 className="profile-info__place">
        {user.city}, {user.country}
      </h2>
    </section>
  );
}
