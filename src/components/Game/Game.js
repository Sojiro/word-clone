import React from 'react';

import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { checkGuess } from "../../game-helpers";
import HappyBanner from './GameWonBanner';
import GameOverBanner from './GameOverBanner';

function randomWord() {// Pick a random word on every pageload.
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  return answer;
}
function Game() {
  const [answer, setAnswer] = React.useState(() => randomWord())
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => ({
      id: crypto.randomUUID(),
      guess: ''
    }))
  );
  const [guessCounter, setGuessCounter] = React.useState(0);
  const [gameWon, setGameWon] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  const restartGame = () => {
    setAnswer(randomWord());
    setGuessList(
      guessList.map(g => ({ ...g, guess: '' }))
    );
    setGuessCounter(0);
    setGameOver(false);
    setGameWon(false);
  }


  const isCorrect = (result) => {
    return result.every(r => r.status === 'correct');
  }

  const handleNewGuess = (guess) => {
    if (guessCounter >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuesses = [...guessList];
    const result = checkGuess(guess, answer)
    newGuesses[guessCounter] = {
      id: newGuesses[guessCounter].id,
      guess,
      result
    };
    setGuessList(newGuesses);
    const newGuessCounter = guessCounter + 1;
    setGuessCounter(newGuessCounter);

    const isCorrectGuess = isCorrect(result);
    if (isCorrectGuess) {
      setGameWon(true);
    } else if (newGuessCounter >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }

  return (
    <>
      <GuessResults list={guessList} />
      <GuessInput
        handleNewGuess={handleNewGuess}
        isDisabled={gameOver}
      />
      {gameOver && <GameOverBanner {...{ answer, restartGame }} />}
      {gameWon && <HappyBanner usedGuesses={guessCounter} />}
    </>
  );
}

export default Game;
