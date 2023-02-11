import React from "react";

function GuessInput({ handleNewGuess, isDisabled }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert('Guess should be a 5 letter word!');
      return;
    }
    handleNewGuess(guess);
    setGuess('');
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        required
        onChange={e =>
          setGuess(e.target.value.toUpperCase())
        }
        disabled={isDisabled} />
    </form>
  );
}

export default GuessInput;
