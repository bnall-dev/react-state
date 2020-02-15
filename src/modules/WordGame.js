import React, { useState } from 'react';
import WordButtons from '../components/WordButtons';
import WordStats from '../components/WordStats';
import Words from '../components/Words';

function WordGame() {
  let [nouns, setNouns] = useState([]);
  let [adjs, setAdjs] = useState([]);

  return (
    <div id="wordGame">
      <header>The Word Game</header>
      <WordStats nouns={nouns} adjs={adjs} />
      <WordButtons
        nouns={nouns}
        adjs={adjs}
        setNouns={setNouns}
        setAdjs={setAdjs}
      />
      <Words nouns={nouns} adjs={adjs} />
    </div>
  );
}

export default WordGame;
