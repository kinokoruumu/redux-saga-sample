import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Product from './Product'

import store from "./configureStore";

// actions
import * as ProductActions from "./actions/product"

// view
function render() {
  ReactDOM.render(
    <Product
      state={store.getState()}
      getProducts={() => store.dispatch(ProductActions.requestGetProducts())}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
