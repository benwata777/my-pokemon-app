// import React from "react";

// const PokemonInfo = ({ pokemon }) => {
//   if (!pokemon) {
//     return <div>No Pokémon data</div>;
//   }

//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       <p>Height: {pokemon.height}</p>
//       <p>Weight: {pokemon.weight}</p>
//       <p>Base experience: {pokemon.base_experience}</p>
//     </div>
//   );
// };

// export default PokemonInfo;
//v2
// import React from "react";

// const PokemonInfo = ({ pokemon }) => {
//   if (!pokemon) {
//     return <div>No Pokémon data</div>;
//   }

//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       <p>Height: {pokemon.height}</p>
//       <p>Weight: {pokemon.weight}</p>
//       <p>Base experience: {pokemon.base_experience}</p>

//       <h2>Stats</h2>
//       <ul>
//         {pokemon.stats.map((stat) => (
//           <li key={stat.stat.name}>
//             {stat.stat.name}: {stat.base_stat}
//           </li>
//         ))}
//       </ul>

//       <h2>Moves</h2>
//       <ul>
//         {pokemon.moves.map((move) => (
//           <li key={move.move.name}>{move.move.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PokemonInfo;
//v3
// import React from "react";
// import "./PokemonInfo.css";

// const PokemonInfo = ({ pokemon }) => {
//   if (!pokemon) {
//     return <div className="pokemon-info">No Pokémon data</div>;
//   }

//   return (
//     <div className="pokemon-info">
//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       <p>Height: {pokemon.height}</p>
//       <p>Weight: {pokemon.weight}</p>
//       <p>Base experience: {pokemon.base_experience}</p>

//       <h2>Stats</h2>
//       <ul>
//         {pokemon.stats.map((stat) => (
//           <li key={stat.stat.name}>
//             {stat.stat.name}: {stat.base_stat}
//           </li>
//         ))}
//       </ul>

//       <h2>Moves</h2>
//       <ul>
//         {pokemon.moves.map((move) => (
//           <li key={move.move.name}>{move.move.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PokemonInfo;
//v4
import React from "react";
import "./PokemonInfo.css";

const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) {
    return <div className="pokemon-info">No Pokémon data</div>;
  }

  return (
    <div className="pokemon-info">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base experience: {pokemon.base_experience}</p>

      <h2>Stats</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>

      <h2>Moves</h2>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;
