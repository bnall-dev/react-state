import React from 'react';

function WordStats(props) {
  return (
    <div id="stats">
      You've generated {props.adjs.length} words and {props.nouns.length} nouns!
    </div>
  );
}

export default WordStats;
