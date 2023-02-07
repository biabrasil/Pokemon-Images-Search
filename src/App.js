import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Bulbasaur from "./images/bulbasaur.webp";
import Chikorita from "./images/chikorita.png";
import Pikachu from "./images/pikachu.png";
import Pokédex from "./images/pokedex.webp";
import Banner from "./components/Banner";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <div className="flex pt-5 pb-10 justify-center">
        <img className="w-44" src={Pokédex} />
      </div>
      <Button></Button>
    </div>
  );
}

export default App;
