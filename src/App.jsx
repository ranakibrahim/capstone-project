import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ChooseHobbyPage from "./pages/ChooseHobbyPage/ChooseHobbyPage";
import "./App.scss";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route
          path="/choose-hobbies"
          element={<ChooseHobbyPage token={token} setToken={token}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
