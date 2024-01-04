import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numberOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numberOfGuesses === 1 ? "1 Guess" : `${numberOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
