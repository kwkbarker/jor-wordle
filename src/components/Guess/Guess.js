import React from "react";
import LetterRow from "../LetterRow/LetterRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ entryList, answer, letterList, setLetterList }) {
  // Create NUM..ALLOWED rows, fill with words or null
  const wordList = [];
  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    if (entryList && i < entryList.length) {
      wordList.push(entryList[i]);
    } else {
      wordList.push(null);
    }
  }

  return (
    <div className="guess-results">
      {wordList.map((word, index) => {
        let letters;
        if (word) {
          letters = checkGuess(word.entry, answer);
          const newList = letterList;
          letters.map(
            (l) =>
              (newList.filter((x) => x.letter == [l.letter])[0].status =
                l.status)
          );
          setLetterList(newList);
        } else {
          letters = range(0, 5).map(() => {
            return { letter: "", status: "" };
          });
        }
        return (
          <p className="guess" key={index}>
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
      })}
    </div>
  );
}

export default Guess;
