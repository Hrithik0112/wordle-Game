import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSumbit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter Exactly 5 Character ");
      return;
    }
    console.log(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSumbit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
