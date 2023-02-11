import React from "react";

function GameOverBanner({ answer, restartGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}{' '}
          <button onClick={restartGame}>🔁</button></strong>.
      </p>
    </div>
  );
}

export default GameOverBanner;
