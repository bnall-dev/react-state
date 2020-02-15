import React, { useState } from 'react';
import Products from '../components/Products';
import InventoryStats from '../components/InventoryStats';

function InventoryGame(props) {
  return (
    <div id="inventoryGame">
      <header>The Inventory Game</header>
      <InventoryStats products={props.products} />
      <div id="products">
        <Products products={props.products} setProducts={props.setProducts} />
      </div>
    </div>
  );
}

export default InventoryGame;
