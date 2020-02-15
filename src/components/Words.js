import React from 'react';

function Words(props) {
  let adjs = props.adjs.map(function(adj, i) {
    let adjKey = 'adj' + i;
    return <li key={adjKey}>{adj}(adj)</li>;
  });
  let nouns = props.nouns.map(function(noun, i) {
    let nounKey = 'noun' + i;
    return <li key={nounKey}>{noun} (noun)</li>;
  });

  return (
    <div id="words">
      <div id="adjs" className="words adjs">
        <ul>{adjs}</ul>
      </div>
      <div id="nouns" className="words nouns"></div>
      <ul>{nouns}</ul>
    </div>
  );
}

export default Words;
