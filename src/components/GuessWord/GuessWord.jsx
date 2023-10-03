import React from "react";

const GuessWord = ({
  entry,
  setEntry,
  entryList,
  setEntryList,
  disabled = false,
}) => {
  function handleInput(e) {
    // Restrict to 5 letters, make uppercase.
    const letters = e.target.value.replace(/[^A-Za-z]/g, "");
    setEntry(letters.slice(0, 5).toUpperCase());
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
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <input type="hidden" value="stop-autocomplete" />
      <label htmlFor="guess-input" className="label">
        Enter Guess:
      </label>
      <input
        id="guess-input"
        type="text"
        onChange={handleInput}
        disabled={disabled}
        value={entry}
        autoComplete="off"
      />
    </form>
  );
};
export default GuessWord;
