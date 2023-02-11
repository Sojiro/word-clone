import React from "react";
import Guess from "./Guess";
function GuessResults({ list, answer }) {
  return (
    <div className="guess-results">
      {
        list.map(({ guess, id }) => (
          <p key={id} className="guess">
            <Guess  {...{guess, answer}} />
          </p>
        ))
      }
    </div>
  );
}

export default GuessResults;
