import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage({ setToken }) {
  return (
    <>
      <NavBar />
      <LoginForm setToken={setToken} />
      <Footer />
    </>
  );
}
