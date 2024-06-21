import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonInfo from "./components/PokemonInfo";
import pokemonLofi from "./assets/pokemon-lofi-littleroot-town.mp3";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        setSuggestions(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const audio = new Audio(pokemonLofi);
    audio.volume = 0.1;
    audio.loop = true;
    audio
      .play()
      .catch((error) => console.error("Audio playback error:", error));

    const handleEnded = () => {
      audio.currentTime = 0;
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemon(null);
    }
  };

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <SearchBar suggestions={suggestions} onSearch={handleSearch} />
      <PokemonInfo pokemon={pokemon} onPokemonClick={handleSearch} />
      <footer>made by Benwata777</footer>
    </div>
  );
};

export default App;
