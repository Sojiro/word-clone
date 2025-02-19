import { range } from "../../../../utils";
import React from "react";

function Guess({ guess, result }) {
  if (guess.length === 0) {
    return (
      range(5).map((id) => (
        <span key={id} className="cell"></span>
      ))
    )
  }

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
