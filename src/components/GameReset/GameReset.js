import React from "react";

function GameReset({ newGame }) {
  return (
    <button className="new-game" onClick={newGame}>
      Play Again
    </button>
  );
}

export default GameReset;
