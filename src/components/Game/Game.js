import Guess from "../Guess";
import GuessWord from "../GuessWord";
import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameReset from "../GameReset/GameReset";
import KeyBoard from "../KeyBoard/KeyBoard";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));

  // Reset game.
  function newGame() {
    setEntry("");
    setEntryList([]);
    setAnswer(sample(WORDS));
    setLetterList(letterListReset());
  }

  function letterListReset() {
    const alpha = Array.from(Array(26)).map((e, i) =>
      String.fromCharCode(i + 65)
    );
    return alpha.map((letter) => ({ letter, status: "" }));
  }

  // Save entries and entered letters.
  const [entry, setEntry] = React.useState("");
  const [entryList, setEntryList] = React.useState([]);
  const [letterList, setLetterList] = React.useState(letterListReset());

  return (
    <>
      {entryList.filter((x) => x.entry == answer).length > 0 && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{entryList.length} guesses</strong>.
          </p>
          <GameReset newGame={newGame} />
        </div>
      )}
      {entryList.length > 6 && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <GameReset newGame={newGame} />
        </div>
      )}
      <Guess
        entryList={entryList}
        answer={answer}
        letterList={letterList}
        setLetterList={setLetterList}
      />
      <GuessWord
        entry={entry}
        setEntry={setEntry}
        entryList={entryList}
        setEntryList={setEntryList}
        disabled={
          entryList.filter((x) => x.entry == answer).length > 0 ||
          entryList.length > 5
        }
      />
      <KeyBoard letterList={letterList} />
    </>
  );
}

export default Game;
