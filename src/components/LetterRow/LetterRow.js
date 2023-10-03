import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function LetterRow({ word, answer, letterList, setLetterList }) {
  // Create array of letter/status for words, empty for empty row.
  let letters;
  if (word) {
    letters = checkGuess(word, answer);
    const newList = letterList;
    letters.map(
      (l) =>
        (newList.filter((x) => x.letter == [l.letter])[0].status = l.status)
    );
    setLetterList(newList);
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
