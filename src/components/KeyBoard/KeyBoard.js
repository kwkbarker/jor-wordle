import React from "react";

const ROWS = [
  Array.from("QWERTYUIOP"),
  Array.from("ASDFGHJKL"),
  Array.from("ZXCVBNM"),
];

function KeyBoard({ letterList }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => {
        return (
          <div className="keyboard-row" key={i}>
            {row.map((l) => {
              const classes =
                "letter " + letterList.filter((x) => x.letter == l)[0].status;
              return (
                <button className={classes} key={l}>
                  {l}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default KeyBoard;
