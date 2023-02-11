import React from "react";

function GameWonBanner({ usedGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in 
        <strong>{' ' + usedGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default GameWonBanner;
