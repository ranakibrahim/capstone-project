import "./LoginPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Loginform from "../../components/LoginForm/Loginform";

export default function LoginPage() {
  return (
    <>
      <NavBar />
      <Loginform/>
      <Footer/>
    </>
  );
}
