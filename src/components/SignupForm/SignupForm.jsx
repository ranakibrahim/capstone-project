import "./SignupForm.scss";
import profileIcon from "../../assets/icons/profile-icon.svg";
import errorIcon from "../../assets/icons/error.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [passError, setPassError] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState({
    email: false,
    password: false,
    confPassword: false,
    firstName: false,
    lastName: false,
    selectedCountry: false,
    selectedCity: false,
  });

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryOptions = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(
          countryOptions.sort((a, b) => a.label.localeCompare(b.label))
        );
      } catch (error) {
      console.error("Error fetching countries:", error);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      if (selectedCountry) {
        try {
          const response = await axios.get(
            `http://api.geonames.org/searchJSON?country=${selectedCountry.value}&maxRows=1000&username=rkibra`
          );
          const cityOptions = response.data.geonames.map((city) => ({
            value: city.geonameId,
            label: city.name,
          }));
          setCities(cityOptions);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };

    getCities();
  }, [selectedCountry]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const { email, password, confPassword, firstName, lastName } =
      event.target.elements;

    const newErrorState = {
      email: !email.value,
      password: !password.value,
      confPassword: !confPassword.value,
      firstName: !firstName.value,
      lastName: !lastName.value,
      selectedCountry: !selectedCountry,
      selectedCity: !selectedCity,
    };

    setError(newErrorState);

    const hasError = Object.values(newErrorState).some(
      (fieldError) => fieldError
    );

    if (hasError) {
      return;
    }

    if (password.value !== confPassword.value) {
      setPassError(true);
      return;
    }

    try {
      const newUser = {
        email: email.value,
        password: password.value,
        first_name: firstName.value,
        last_name: lastName.value,
        country: selectedCountry.label,
        city: selectedCity.label,
      };
      await axios.post(
        `${import.meta.env.VITE_USERS}/signup`,
        newUser
      );
      console.log("New User created with email: ", email.value);
      navigate("/login");
    } catch (e) {
      if (e.response && e.response.status === 409) {
        setUserExists(true);
      } else {
        console.error("There was an error signing up.");
      }
    }
  };

  return (
    <main className="signup">
      <h1 className="signup__title">Ready to begin your journey?</h1>
      <form className="form" onSubmit={handleSignup}>
        <h2 className="form__title">Sign up</h2>
        <img src={profileIcon} alt="profile icon" className="form__profile" />

        <label htmlFor="email" className="form__label">
          email
          <input type="email" id="email" name="email" className="form__field" />
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

        <label htmlFor="confPassword" className="form__label">
          confirm password
          <input
            type="password"
            id="confPassword"
            name="confPassword"
            className="form__field"
          />
          {error.confPassword && (
            <span className="form__error">
              <img
                src={errorIcon}
                alt="error icon"
                className="form__error-icon"
              />
              This field is required
            </span>
          )}
          {passError && (
            <span className="form__error">
              <img
                src={errorIcon}
                alt="error icon"
                className="form__error-icon"
              />
              Passwords don't match
            </span>
          )}
        </label>

        <label htmlFor="firstName" className="form__label">
          first name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form__field"
          />
          {error.firstName && (
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

        <label htmlFor="lastName" className="form__label">
          last name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form__field"
          />
          {error.lastName && (
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

        <label htmlFor="country" className="form__label">
          country
          <Select
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "1px solid #ea638c",
                borderRadius: "8px",
              }),
            }}
          />
          {error.selectedCountry && (
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

        <label htmlFor="city" className="form__label">
          city
          <Select
            options={cities}
            value={selectedCity}
            onChange={handleCityChange}
            isDisabled={!selectedCountry}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "1px solid #ea638c",
                borderRadius: "8px",
              }),
            }}
          />
          {error.selectedCity && (
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
          Sign up
        </button>
        {userExists && (
          <span className="form__error">
            <img
              src={errorIcon}
              alt="error icon"
              className="form__error-icon"
            />
            This user already exists
          </span>
        )}
      </form>
    </main>
  );
}
