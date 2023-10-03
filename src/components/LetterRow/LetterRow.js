import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function LetterRow({ word, answer }) {
  // Create array of letter/status for words, empty for empty row.
  let letters;
  if (word) {
    letters = checkGuess(word, answer);
  } else {
    letters = range(0, 5).map(() => {
      return { letter: "", status: "" };
    });
  }
  return (
    <p className="guess">
      {letters.map((l, index) => {
        const classes = "cell " + l.status;
        return (
          <span className={classes} key={index}>
            {l.letter}
          </span>
        );
      })}
    </p>
  );
}

export default LetterRow;
