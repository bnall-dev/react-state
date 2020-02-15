import React from 'react';
import AllNumbers from './../components/AllNumbers';
import OddNumbers from './../components/OddNumbers';
import EvenNumbers from './../components/EvenNumbers';

function NumbersGame(props) {
  return (
    <div id="numbersGame">
      <header>The Numbers Game</header>
      <button onClick={props.handleClick}>Add Number</button>
      <div id="stats">
        <div className="header">Stats</div>
        {props.uniques.length} unique numbers
      </div>
      <div id="lists">
        <div id="allNumbers" className="listDiv">
          <ul id="allNumbersList">
            <div className="header">All ({props.numbers.length})</div>
            <AllNumbers numbers={props.numbers} />
          </ul>
        </div>
        <div id="oddNumbers" className="listDiv">
          <ul id="oddNumbersList">
            <div className="header">Odd ({props.oddNumbers.length})</div>
            <OddNumbers numbers={props.oddNumbers} />
          </ul>
        </div>
        <div id="evenNumbers" className="listDiv">
          <ul id="evenNumbersList">
            <div className="header">Even ({props.evenNumbers.length})</div>
            <EvenNumbers numbers={props.evenNumbers} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NumbersGame;
