import "./LoginForm.scss";
import profileIcon from "../../assets/icons/profile-icon.svg";

export default function Loginform() {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <main className="login">
      <h1 className="login__title">Ready to begin your journey?</h1>
      <form className="form" onSubmit={handleLogin}>
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

        <button type="submit" className="form__submit">
          Login
        </button>
      </form>
    </main>
  );
}
