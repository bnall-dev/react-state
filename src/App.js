import React, { useState } from 'react';
import NumbersGame from './modules/NumbersGame';
import WordGame from './modules/WordGame';
import InventoryGame from './modules/InventoryGame';
import './App.css';
import data from './components/data';

function App() {
  let [numbers, setNumbers] = useState([]);
  let [oddNumbers, setOddNumbers] = useState([]);
  let [evenNumbers, setEvenNumbers] = useState([]);
  let [uniques, setUniques] = useState([]);
  let [products, setProducts] = useState(data.products);

  const handleClick = () => {
    let numsCopy = [...numbers, Math.floor(Math.random() * 10)];
    setNumbers(numsCopy);
    if (numsCopy[numsCopy.length - 1] % 2 === 1) {
      let oddNumsCopy = [...oddNumbers, numsCopy[numsCopy.length - 1]];
      setOddNumbers(oddNumsCopy);
    } else if (numsCopy[numsCopy.length - 1] % 2 === 0) {
      let evenNumsCopy = [...evenNumbers, numsCopy[numsCopy.length - 1]];
      setEvenNumbers(evenNumsCopy);
    }
    if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
      let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
      setUniques(uniquesCopy);
    }
  };

  return (
    <div id="App">
      <NumbersGame
        numbers={numbers}
        oddNumbers={oddNumbers}
        evenNumbers={evenNumbers}
        setNumbers={setNumbers}
        setEvenNumbers={setEvenNumbers}
        setOddNumbers={setOddNumbers}
        uniques={uniques}
        setUniques={setUniques}
        handleClick={handleClick}
      />
      <WordGame />
      <InventoryGame products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
