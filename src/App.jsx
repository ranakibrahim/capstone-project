import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ChooseHobbyPage from "./pages/ChooseHobbyPage/ChooseHobbyPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/choose-hobbies" element={<ChooseHobbyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
