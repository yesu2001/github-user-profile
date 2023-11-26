import "./App.css";
import bg from "./assets/hero-image-github-profile.png";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  return (
    <div className="flex h-full">
      <div className="absolute top-0 w-full">
        <img src={bg} alt="hero pic" className="w-full" />
      </div>
      <ProfileContainer />
    </div>
  );
}

export default App;
