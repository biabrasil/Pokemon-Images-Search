import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <h2 className="mt-10 mx-4 text-xl font-medium text-indigo-500">
        Which Pokémon would you like to find?
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 mx-2 w-1/3 flex bg-transparent p-2 px-4 rounded-full ring-1 ring-indigo-500 text-indigo-500"
      >
        <input
          value={term}
          onChange={handleChange}
          className="bg-transparent"
        />
      </form>
      
    </div>
  );
}
