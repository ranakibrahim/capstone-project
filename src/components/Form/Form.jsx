import "./Form.scss";
import profileIcon from "../../assets/icons/profile-icon.svg";

export default function Form({ type }) {
  if (type === "signup") {
    return (
      <form className="form">
        <h2 className="form__title">Sign up</h2>
        <img src={profileIcon} alt="profile icon" className="form__profile" />

        <label htmlFor="email" className="form__label">
          email
          <input type="email" id="email" name="email" className="form__field" />
        </label>

        <label htmlFor="username" className="form__label">
          username
          <input
            type="text"
            id="username"
            name="username"
            className="form__field"
          />
        </label>

        <label htmlFor="password" className="form__label">
          password
          <input
            type="password"
            id="password"
            name="password"
            className="form__field"
          />
        </label>

        <label htmlFor="confPassword" className="form__label">
          confirm password
          <input
            type="password"
            id="confPassword"
            name="confPassword"
            className="form__field"
          />
        </label>

        <button className="form__submit">Sign up</button>
      </form>
    );
  } else if (type === "login") {
    return (
      <form className="form">
        <h2 className="form__title">Login</h2>
        <img src={profileIcon} alt="profile icon" className="form__profile" />

        <label htmlFor="usernameEmail" className="form__label">
          username/email
          <input
            type="text"
            id="usernameEmail"
            name="usernameEmail"
            className="form__field"
          />
        </label>

        <label htmlFor="password" className="form__label">
          password
          <input
            type="password"
            id="password"
            name="password"
            className="form__field"
          />
        </label>

        <button className="form__submit">Login</button>
      </form>
    );
  }
}
