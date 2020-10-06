import React from 'react'

import ItemCount from './ItemCount'
import ListComponent from './ListComponent'
import PriceInfo from './PriceInfo'

import './ItemList.css'

/**
 * Top level class for the right side of the app, displays current cart information as well as final pricing information
 */
export default class ItemList extends React.Component {
  constructor (props) {
    super()

    this.state = {
      cart: props.cart
    }
  }

  render () {
    return (
      <div className='component-item-list'>
        <ItemCount length={this.state.cart.length} />
        <ListComponent cart={this.state.cart} />
        <PriceInfo cart={this.state.cart} />
      </div>
    )
  }
}
