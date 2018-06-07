/*eslint-disable no-unused-vars */
import React from 'react'

const Product = ({ state, getProducts }) => (
  <div>
    <button onClick={getProducts}>
      getProducts
    </button>
    <div>
      {`isFetching: ${state.isFetching}`}
    </div>
    <div>
      {state.products.map((product) => console.log(product))}
    </div>
  </div>
);

export default Product
