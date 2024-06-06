import "./LoginForm.scss";
import profileIcon from "../../assets/icons/profile-icon.svg";
import axios from "axios";

export default function Loginform() {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const loginUser = {
      email: form.email.value,
      password: form.password.value,
    };

    axios.post(`${import.meta.env.VITE_USERS}/login`, loginUser);
    console.log(loginUser);
  };
  return (
    <main className="login">
      <h1 className="login__title">Ready to begin your journey?</h1>
      <form className="form" onSubmit={handleLogin}>
        <h2 className="form__title">Login</h2>
        <img src={profileIcon} alt="profile icon" className="form__profile" />

        <label htmlFor="email" className="form__label">
          email
          <input
            type="text"
            id="email"
            name="email"
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
