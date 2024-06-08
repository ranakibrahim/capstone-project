import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useEffect } from "react";

export default function LoginPage({ setToken }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <LoginForm setToken={setToken} />
      <Footer />
    </>
  );
}
