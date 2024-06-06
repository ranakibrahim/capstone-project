import "./SignupForm.scss";
import profileIcon from "../../assets/icons/profile-icon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function SignupForm() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryOptions = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(countryOptions.sort((a, b) => a.label.localeCompare(b.label)));
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
    setSelectedCity(null); // Reset city selection
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };
  const handleSignup = (event) => {
    event.preventDefault();
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

        <label htmlFor="firstName" className="form__label">
          first name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form__field"
          />
        </label>

        <label htmlFor="lastName" className="form__label">
          last name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form__field"
          />
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
        </label>

        <button type="submit" className="form__submit">
          Sign up
        </button>
      </form>
    </main>
  );
}
