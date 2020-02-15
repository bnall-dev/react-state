import React from 'react';

function Products(props) {
  let products = [...props.products];



  return products.map(function(product, i) {
    let key = 'product' + i;

    return (
      <div className="product" key={key}>
        <div className="productInfo">
          <div className="productHeader">{product.name}</div>
          <div className="productInStock">{product.numberInStock} in stock</div>
        </div>
        <div className="buttons">
          <button
            className="decreaseButton"
            onClick={() => {
              if (product.numberInStock > 0) {
                product.numberInStock -= 1;
                props.setProducts([...products]);
              }
            }}
          >
            -
          </button>
          <button
            className="increaseButton"
            onClick={() => {
              product.numberInStock += 1;
              props.setProducts([...products]);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  });
}

export default Products;
