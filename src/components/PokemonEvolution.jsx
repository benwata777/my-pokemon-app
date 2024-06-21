import React from "react";
import "./PokemonEvolution.css";

const PokemonEvolution = ({ evolutionChain, handlePokemonClick }) => {
  const renderEvolutionChain = (chain) => {
    if (!chain) return null;

    const evolutions = [];
    let current = chain.chain;

    while (current) {
      const pokemonId = extractPokemonId(current.species.url);
      const pokemonName = current.species.name;
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

      evolutions.push({
        name: pokemonName,
        url: pokemonUrl,
      });

      current = current.evolves_to[0];
    }

    return (
      <div>
        <h3>Evolution Chain</h3>
        <ul>
          {evolutions.map((evolution, index) => (
            <li key={index}>
              <span
                onClick={() => handlePokemonClick(evolution.url)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                {evolution.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const extractPokemonId = (url) => {
    const idRegex = /\/(\d+)\//;
    const match = url.match(idRegex);
    if (match) {
      return match[1];
    }
    return null;
  };

  return <div>{renderEvolutionChain(evolutionChain)}</div>;
};

export default PokemonEvolution;
