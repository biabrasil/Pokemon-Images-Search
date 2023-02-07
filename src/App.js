import "./App.css";
import Pokédex from "./images/pokedex.webp";
import Banner from "./components/Banner";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Banner />
      <button
        className={
          "mt-10 mx-10 absolute right-20 flex bg-transparent p-2 px-4 rounded-full ring-1 ring-indigo-500  text-indigo-500"
        }
        onClick
      >
        Find Pokémon Stats
      </button>
      <div className="flex pt-5 pb-10 justify-center">
        <img className="w-44" src={Pokédex} />
      </div>
      <Button></Button>
    </div>
  );
}

export default App;
