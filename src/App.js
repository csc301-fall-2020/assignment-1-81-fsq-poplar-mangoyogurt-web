import React from 'react'

import InfoMenu from './component/info_menu/InfoMenu'
import ItemList from './component/item_list/ItemList'
import './App.css'
import PRODUCTS from './component/resources/products'

export default class App extends React.Component {
  constructor () {
    super()

    this.addToCartHandler = this.addToCartHandler.bind(this)
    this.state = {
      cart: []
    }
  }

  addToCartHandler (id) {
    if (PRODUCTS[id]) {
      const newCart = this.state.cart
      newCart.push(id)
      this.setState({
        cart: newCart
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <InfoMenu handler={this.addToCartHandler} />
        <ItemList cart={this.state.cart} />
      </div>
    )
  }
}
