import React, { useState } from "react";

const PokemonMoves = ({ moves }) => {
  const [showLevelUpMoves, setShowLevelUpMoves] = useState(false);
  const [showMachineMoves, setShowMachineMoves] = useState(false);
  const [showEggMoves, setShowEggMoves] = useState(false);

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

export default PokemonMoves;
