import React from 'react';

function InventoryStats(props) {
  let lowstock = props.products.filter(product => {
    return product.numberInStock <= 2;
  });

  return (
    <div id="stats">
      There are {lowstock.length} products with low inventory
    </div>
  );
}

export default InventoryStats;
