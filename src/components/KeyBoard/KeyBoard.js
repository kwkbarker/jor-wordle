import React from "react";

const ROWS = [
  Array.from("QWERTYUIOP"),
  Array.from("ASDFGHJKL"),
  Array.from("ZXCVBNM"),
];

function KeyBoard({ letterList, entry, setEntry, entryList, setEntryList }) {
  function handleClick(letter) {
    if (entry.length < 5) {
      const newEntry = entry + letter;
      setEntry(newEntry);
    }
  }

  function handleDelete() {
    const newEntry = entry.slice(0, entry.length - 1);
    setEntry(newEntry);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // No submissions if not 5 letters
    if (entry.length != 5) {
      return;
    }

    // Reset input.
    setEntry("");

    // Add word to entries.
    const newList = [...entryList, { id: Math.random(), entry: entry }];
    setEntryList(newList);
  }

  return (
    <div className="keyboard">
      {ROWS.map((row, i) => {
        return (
          <div className="keyboard-row" key={i}>
            {row.map((l) => {
              const classes =
                "letter " + letterList.filter((x) => x.letter == l)[0].status;
              return (
                <button
                  className={classes}
                  key={l}
                  onClick={() => handleClick(l)}
                >
                  {l}
                </button>
              );
            })}
          </div>
        );
      })}
      <div className="keyboard-row">
        <button className="letter" onClick={handleDelete}>
          DEL
        </button>
        <button className="letter submit" onClick={(e) => handleSubmit(e)}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default KeyBoard;
