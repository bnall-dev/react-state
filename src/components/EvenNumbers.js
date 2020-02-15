import React from 'react';

function EvenNumbers(props) {
  let { numbers } = props;

  return numbers.map(function(value, i) {
    let key = 'evenNumbers' + i;
    return <li key={key}>{value}</li>;
  });
}

export default EvenNumbers;
