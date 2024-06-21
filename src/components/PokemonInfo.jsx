import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./PokemonInfo.css";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolution from "./PokemonEvolution";

const PokemonInfo = ({ pokemon, onPokemonClick }) => {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [speciesInfo, setSpeciesInfo] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      if (pokemon) {
        try {
          const speciesResponse = await axios.get(pokemon.species.url);
          const evolutionChainResponse = await axios.get(
            speciesResponse.data.evolution_chain.url
          );

          const flavorTextEntries =
            speciesResponse.data.flavor_text_entries.filter(
              (entry) => entry.language.name === "en"
            );

          if (flavorTextEntries.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * flavorTextEntries.length
            );
            const randomFlavorText = flavorTextEntries[randomIndex].flavor_text;

            setSpeciesInfo({
              species: speciesResponse.data,
              flavorText: randomFlavorText,
            });
          }

          setEvolutionChain(evolutionChainResponse.data);
        } catch (error) {
          console.error("Error fetching evolution chain:", error);
        }
      }
    };

    fetchEvolutionChain();
  }, [pokemon]);

  const handlePokemonClick = (pokemonUrl) => {
    const pokemonId = extractPokemonId(pokemonUrl);
    onPokemonClick(pokemonId); // Use the provided onPokemonClick handler
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const extractPokemonId = (url) => {
    const idRegex = /\/(\d+)\//;
    const match = url.match(idRegex);
    if (match) {
      return match[1];
    }
    return null;
  };

  if (!pokemon) {
    return <div className="pokemon-info">Please search for a Pokémon</div>;
  }

  return (
    <div className="pokemon-info" ref={scrollRef}>
      <h2>
        {pokemon.name} (#{pokemon.id})
      </h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonTypes types={pokemon.types} />
      <h3>Info</h3>
      <p>{speciesInfo && speciesInfo.flavorText}</p>
      <PokemonStats stats={pokemon.stats} />
      <PokemonMoves moves={pokemon.moves} />
      <PokemonEvolution
        evolutionChain={evolutionChain}
        handlePokemonClick={handlePokemonClick}
      />
    </div>
  );
};

export default PokemonInfo;
