import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSumbit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter Exactly 5 Character ");
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSumbit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
