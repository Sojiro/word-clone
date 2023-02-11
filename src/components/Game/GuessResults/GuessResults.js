import React from "react";
import Guess from "./Guess";

function GuessResults({ list }) {
  return (
    <div className="guess-results">
      {
        list.map(({ guess, id, result }) => (
          <p key={id} className="guess">
            <Guess {...{ guess, result }} />
          </p>
        ))
      }
    </div>
  );
}

export default GuessResults;
