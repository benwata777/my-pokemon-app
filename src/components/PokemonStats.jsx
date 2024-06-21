import React from "react";

const PokemonStats = ({ stats }) => {
  return (
    <div>
      <h3>Stats</h3>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonStats;
