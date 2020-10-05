import React from 'react'

import './ListComponent.css'
import PRODUCTS from '../resources/products'

export default class ListComponent extends React.Component {
  render () {
    return (
      <div className='component-list-component'>
        {this.props.cart.map(cart => (
        <div>
          <div className="component-list-component-item-name">{PRODUCTS[cart].name}</div>
          <div className="component-list-component-item-price">${PRODUCTS[cart].price}</div>
        </div>
      ))}
      </div>
    )
  }
}
