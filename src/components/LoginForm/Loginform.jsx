import "./LoginForm.scss";
import errorIcon from "../../assets/icons/error.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setToken }) {
  const [error, setError] = useState([{ email: false }, { password: false }]);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    const newErrorState = {
      email: !email.value,
      password: !password.value,
    };

    setError(newErrorState);

    const hasError = Object.values(newErrorState).some(
      (fieldError) => fieldError
    );

    if (hasError) {
      return;
    }

    try {
      const loginUser = {
        email: email.value,
        password: password.value,
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_USERS}/login`,
        loginUser
      );
      console.log("User logged in with email: ", loginUser.email);
      const { token } = data;
      
      sessionStorage.setItem("token", token);
      setToken(token);
      navigate("/choose-hobbies");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="login">
      <h1 className="login__title">Ready to begin your journey?</h1>
      <form className="form" onSubmit={handleLogin}>
        <h2 className="form__title">Login</h2>
        <img src={profileIcon} alt="profile icon" className="form__profile" />

        <label htmlFor="email" className="form__label">
          email
          <input type="text" id="email" name="email" className="form__field" />
          {error.email && (
            <span className="form__error">
              <img
                src={errorIcon}
                alt="error icon"
                className="form__error-icon"
              />
              This field is required
            </span>
          )}
        </label>

        <label htmlFor="password" className="form__label">
          password
          <input
            type="password"
            id="password"
            name="password"
            className="form__field"
          />
          {error.password && (
            <span className="form__error">
              <img
                src={errorIcon}
                alt="error icon"
                className="form__error-icon"
              />
              This field is required
            </span>
          )}
        </label>

        <button type="submit" className="form__submit">
          Login
        </button>
      </form>
    </main>
  );
}
