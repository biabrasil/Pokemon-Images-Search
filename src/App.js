import "./App.css";
import Images from "./images";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Pokédex from "./images/pokedex.webp";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Banner />
      <div className="App">
        <div className="flex pt-10 justify-center">
          <img className="w-44" src={Pokédex} alt="Pokédex Logo" />
        </div>
        <Link
          to="/images"
          className={
            "mt-10 mx-10 absolute top-20 right-20 flex bg-transparent p-2 px-4 rounded-full ring-1 ring-indigo-500  text-indigo-500"
          }
        >
          Search Pokémon Images
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
}

export default App;
