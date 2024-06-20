import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./PokemonInfo.css";

const PokemonInfo = ({ pokemon }) => {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [showLevelUpMoves, setShowLevelUpMoves] = useState(false);
  const [showMachineMoves, setShowMachineMoves] = useState(false);
  const [showEggMoves, setShowEggMoves] = useState(false);
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

          // ไว้เกบข้อมูล species และ flavor_text ทุก version ไว้ใน state
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
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        setSelectedPokemon(response.data);
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setShowSearchButton(false);
      })
      .catch((error) => {
        console.error("Error fetching selected Pokemon:", error);
      });
  };

  const renderMoves = (moves) => {
    if (!moves) return null;

    const movesByMethod = {
      "level-up": [],
      machine: [],
      egg: [],
    };

    moves.forEach((move) => {
      if (move.version_group_details?.[0]?.move_learn_method?.name) {
        const method = move.version_group_details[0].move_learn_method.name;
        switch (method) {
          case "level-up":
            movesByMethod["level-up"].push(move);
            break;
          case "machine":
            movesByMethod["machine"].push(move);
            break;
          case "egg":
            movesByMethod["egg"].push(move);
            break;
          default:
            break;
        }
      }
    });

    return (
      <div>
        <button
          className={`toggle-button ${showLevelUpMoves ? "active" : ""}`}
          onClick={() => setShowLevelUpMoves(!showLevelUpMoves)}
        >
          {showLevelUpMoves ? "Close Level-up Moves" : "Open Level-up Moves"}
        </button>
        {showLevelUpMoves && (
          <div>
            <h3>Level-up Moves</h3>
            {movesByMethod["level-up"].map((move) => (
              <div key={move.move.name} className="move">
                <h4>{move.move.name}</h4>
                <p>
                  Learned at level:{" "}
                  {move.version_group_details[0].level_learned_at}
                </p>
              </div>
            ))}
          </div>
        )}

        <button
          className={`toggle-button ${showMachineMoves ? "active" : ""}`}
          onClick={() => setShowMachineMoves(!showMachineMoves)}
        >
          {showMachineMoves ? "Close Machine Moves" : "Open Machine Moves"}
        </button>
        {showMachineMoves && (
          <div>
            <h3>Machine Moves</h3>
            {movesByMethod["machine"].map((move) => (
              <div key={move.move.name} className="move">
                <h4>{move.move.name}</h4>
                <p>Machine method</p>
              </div>
            ))}
          </div>
        )}

        <button
          className={`toggle-button ${showEggMoves ? "active" : ""}`}
          onClick={() => setShowEggMoves(!showEggMoves)}
        >
          {showEggMoves ? "Close Egg Moves" : "Open Egg Moves"}
        </button>
        {showEggMoves && (
          <div>
            <h3>Egg Moves</h3>
            {movesByMethod["egg"].map((move) => (
              <div key={move.move.name} className="move">
                <h4>{move.move.name}</h4>
                <p>Egg move</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderEvolutionChain = (chain) => {
    if (!chain || !speciesInfo) return null;

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

  if (!pokemon) {
    return <div className="pokemon-info">Please search for a Pokémon</div>;
  }

  return (
    <div className="pokemon-info" ref={scrollRef}>
      {selectedPokemon ? (
        <div>
          <button onClick={() => setSelectedPokemon(null)}>Back</button>
          <h2>
            {selectedPokemon.name} (#{selectedPokemon.id})
          </h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <h3>Types</h3>
          <ul>
            {selectedPokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h3>Stats</h3>
          <ul>
            {selectedPokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h3>Moves</h3>
          {renderMoves(selectedPokemon.moves)}
          {renderEvolutionChain(evolutionChain)}
        </div>
      ) : (
        <div>
          <h2>
            {pokemon.name} (#{pokemon.id})
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>Info</h3>
          <p>{speciesInfo && speciesInfo.flavorText}</p>
          <h3>Types</h3>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
          <h3>Stats</h3>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h3>Moves</h3>
          {renderMoves(pokemon.moves)}
          {renderEvolutionChain(evolutionChain)}
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
