import "./App.css";
import ProfileCard from "./ProfileCard";
import Bulbasaur from "./images/bulbasaur.webp";
import Chikorita from "./images/chikorita.png";
import Pikachu from "./images/pikachu.png";
import Pokédex from "./images/pokedex.webp";

function App() {
  return (
    <div className="App">
      <div className="flex pt-5 pb-10 justify-center">
        <img className="w-44" src={Pokédex} />
      </div>
      <div className="flex gap-x-5 px-10">
        <ProfileCard title="Bulbasaur" handle="Grass" image={Bulbasaur} />

        <ProfileCard title="Chikorita" handle="Grass" image={Chikorita} />

        <ProfileCard title="Pikachu" handle="Electric" image={Pikachu} />
      </div>
    </div>
  );
}

export default App;
