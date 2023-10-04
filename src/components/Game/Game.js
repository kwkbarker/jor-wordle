import Guess from "../Guess";
import GuessWord from "../GuessWord";
import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameReset from "../GameReset/GameReset";
import KeyBoard from "../KeyBoard/KeyBoard";
import Banner from "../Banner/Banner";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));

  // Reset game.
  function newGame() {
    setEntry("");
    setEntryList([]);
    setAnswer(sample(WORDS));
    setLetterList(letterListReset());
    setGameStatus("running");
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
  const [gameStatus, setGameStatus] = React.useState("running");

  return (
    <>
      {gameStatus === "won" && (
        <Banner
          status="happy"
          children={
            <>
              <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                  {entryList.length}{" "}
                  {entryList.length === 1 ? "guess" : "guesses"}
                </strong>
                .
              </p>
              <GameReset newGame={newGame} />
            </>
          }
        />
      )}
      {gameStatus === "lost" && (
        <Banner
          status="sad"
          children={
            <>
              <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </p>
              <GameReset newGame={newGame} />
            </>
          }
        />
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
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <KeyBoard
        letterList={letterList}
        entry={entry}
        setEntry={setEntry}
        entryList={entryList}
        setEntryList={setEntryList}
      />
    </>
  );
}

export default Game;
