import { range } from "../../../../utils";
import { checkGuess } from "../../../../game-helpers";
import React from "react";

function Guess({ guess, answer }) {
  if (guess.length === 0) {
    return (
      range(5).map((id) => (
        <span key={id} className="cell"></span>
      ))
    )
  }

  const result = checkGuess(guess, answer);

  return (
    guess.split('').map(
      (c, index) => (
        <span key={index}
          className={`cell ${result[index].status}`}
        >{c}</span>
      )
    )
  )
}

export default Guess;
