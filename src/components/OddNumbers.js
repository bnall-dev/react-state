import React from 'react';

function OddNumbers(props) {
  let { numbers } = props;

  return numbers.map(function(value, i) {
    let key = 'oddNumbers' + i;
    return <li key={key}>{value}</li>;
  });
}

export default OddNumbers;
