import { useState } from "react";
import ProfileCard from "./ProfileCard";
import Bulbasaur from "../images/bulbasaur.webp";
import Chikorita from "../images/chikorita.png";
import Pikachu from "../images/pikachu.png";
import Gengar from "../images/Gengar.png";
import Jigglypuff from "../images/Jigglypuff.png";

export default function Button() {
  const imageMap = {
    Pikachu,
    Bulbasaur,
    Chikorita,
    Gengar,
    Jigglypuff,
  };

  function getRandomPokemon() {
    const pokemon = [
      "Pikachu",
      "Chikorita",
      "Bulbasaur",
      "Gengar",
      "Jigglypuff",
    ];
    return pokemon[Math.floor(Math.random() * pokemon.length)];
  }

  const [pokemon, setPokemon] = useState([]);

  const handleClick = () => {
    setPokemon([...pokemon, getRandomPokemon()]);
  };

  const renderedPokemon = pokemon.map((pokemon, index) => {
    return (
      <ProfileCard
        title={pokemon}
        key={index}
        image={imageMap[pokemon]}
      ></ProfileCard>
    );
  });

  return (
    <div>
      <button
        className={
          "bg-indigo-500 p-5 motion-safe:hover:-translate-y-0.5 motion-safe:transition rounded-lg ring-1 ring-slate-900/5 shadow-xl text-white"
        }
        onClick={handleClick}
      >
        Throw Pokeball
      </button>
      <div>{renderedPokemon}</div>
    </div>
  );
}
