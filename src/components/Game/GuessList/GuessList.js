import React from "react";

function GuessList({ list }) {
  return (
    <div className="guess-results">
      {
        list.map(({ guess, id }) => (
          <p key={id} className="guess">{guess}</p>
        ))
      }
    </div>
  );
}

export default GuessList;
