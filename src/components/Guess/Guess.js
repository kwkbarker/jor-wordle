import React from "react";
import LetterRow from "../LetterRow/LetterRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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
      {wordList.map((word, index) => (
        <LetterRow
          letterList={letterList}
          setLetterList={setLetterList}
          word={word ? word.entry : null}
          answer={answer}
          key={word ? word.id : index}
        ></LetterRow>
      ))}
    </div>
  );
}

export default Guess;
