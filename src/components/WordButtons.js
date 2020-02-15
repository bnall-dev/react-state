import React from 'react';
import faker from 'faker';

function WordButtons(props) {
  const handleClickNoun = () => {
    let nouns = [...props.nouns, faker.company.bsNoun()];
    props.setNouns(nouns);
  };
  const handleClickAdj = () => {
    let adjs = [...props.adjs, faker.company.bsAdjective()];
    props.setAdjs(adjs);
  };

  return (
    <div id="buttons">
      <button id="adjButton" className="button" onClick={handleClickAdj}>
        Add Adjective
      </button>
      <button id="nounButton" className="button" onClick={handleClickNoun}>
        Add Noun
      </button>
    </div>
  );
}

export default WordButtons;
