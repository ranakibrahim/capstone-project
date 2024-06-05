import Profile from "../../components/Profile/Profile";
import HobbiesList from "../../components/HobbiesList/HobbiesList";
import "./ChooseHobbyPage.scss";

export default function ChooseHobbyPage() {
  return (
    <main className="hobbies">
      <Profile />
      <h1 className="hobbies__title">Hello, <span className="hobbies__username">Jane Doe</span></h1>
      <HobbiesList />
    </main>
  );
}
