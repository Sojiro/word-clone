import React from 'react';

import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => ({
      id: crypto.randomUUID(),
      guess: ''
    }))
  );
  const [guessCounter, setGuessCounter] = React.useState(0);

  const handleNewGuess = (guess) => {
    if (guessCounter >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuesses = [...guessList];
    newGuesses[guessCounter].guess = guess;
    setGuessList(newGuesses);
    setGuessCounter(guessCounter + 1);
  }

  return (
    <>
      <GuessResults list={guessList} />
      <GuessInput {...{ handleNewGuess }} />
    </>
  );
}

export default Game;
