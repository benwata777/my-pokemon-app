import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const pokemonData = response.data.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
        }));
        setAllPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching all Pokémon data:", error);
      }
    };

    fetchAllPokemon();
  }, []);

  const fetchPokemonData = async (input) => {
    try {
      let matchedPokemon;
      if (!isNaN(input)) {
        matchedPokemon = allPokemon.find((p) => p.id === parseInt(input));
      } else {
        matchedPokemon = allPokemon.find((p) =>
          p.name.includes(input.toLowerCase())
        );
      }

      if (matchedPokemon) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${matchedPokemon.name}`
        );
        setPokemon(response.data);
      } else {
        setPokemon(null);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemon(null);
    }
  };

  return (
    <div className="container">
      <h1>Pokémon Search</h1>
      <SearchBar suggestions={allPokemon} onSearch={fetchPokemonData} />
      <PokemonInfo pokemon={pokemon} />
      <footer>made by Benwata777</footer>
    </div>
  );
};

export default App;
