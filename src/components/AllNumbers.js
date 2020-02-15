import React from 'react';

function AllNumbers(props) {
  let { numbers } = props;

  return numbers.map(function(value, i) {
    let key = 'allNumbers' + i;
    return <li key={key}>{value}</li>;
  });
}

export default AllNumbers;
