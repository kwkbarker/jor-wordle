import Guess from "../Guess";
import GuessWord from "../GuessWord";
import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameReset from "../GameReset/GameReset";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));

  // Reset game.
  function newGame() {
    setEntry("");
    setEntryList([]);
    setAnswer(sample(WORDS));
  }

  // Save entries and entered letters.
  const [entry, setEntry] = React.useState("");
  const [entryList, setEntryList] = React.useState([]);

  return (
    <>
      {entryList.filter((x) => x.entry == answer).length > 0 && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{entryList.length} guesses</strong>.
          </p>
          <GameReset newGame={newGame}></GameReset>
        </div>
      )}
      {entryList.length > 5 && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <GameReset newGame={newGame}></GameReset>
        </div>
      )}
      <Guess entryList={entryList} answer={answer}></Guess>
      <GuessWord
        entry={entry}
        setEntry={setEntry}
        entryList={entryList}
        setEntryList={setEntryList}
        disabled={
          entryList.filter((x) => x.entry == answer).length > 0 ||
          entryList.length > 5
        }
      ></GuessWord>
    </>
  );
}

export default Game;
