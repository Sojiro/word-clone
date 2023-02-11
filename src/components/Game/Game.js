import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "./GuessInput";
import GuessList from "./GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState([]);

  const handleNewGuess = (guess) => {
    setGuessList([...guessList, {
      id: crypto.randomUUID(),
      guess
    }]);
  }

  return (
    <>
      <GuessList list={guessList} />
      <GuessInput {...{ handleNewGuess }} />
    </>
  );
}

export default Game;
