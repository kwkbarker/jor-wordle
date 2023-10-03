import React from "react";

const GuessList = ({ entryList }) => {
  return (
    <div className="guess-results">
      {entryList.map((ent) => (
        <p className="guess" key={ent.id}>
          {ent.entry}
        </p>
      ))}
    </div>
  );
};

export default GuessList;
