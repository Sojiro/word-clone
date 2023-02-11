import { range } from "../../../../utils";
import React from "react";

function Guess({ guess }) {
  if (guess.length === 0) {
    return (
      range(5).map((id) => (
        <span key={id} className="cell"></span>
      ))
    )
  }
  return (
    guess.split('').map(
      (c, id) => (
        <span key={id} className="cell">{c}</span>
      )
    )
  )
}

export default Guess;
