import React from 'react'

import './CurrentItem.css'
import PRODUCTS from '../resources/products'

/**
 * Large space on the left side which displays the last scanned item's ID, name, price and image if available
 */
export default class CurrentItem extends React.Component {
  render () {
    const id = this.props.item

    if (PRODUCTS[id]) {
      return (
        <div className='component-current-item'>
          <div className='current-item-box-name'>{PRODUCTS[id].name}</div>
          <div className='current-item-box-price'>{'$' + PRODUCTS[id].price}</div>
          <div className='current-item-box-id'>ID: {id}</div>
          <div className='item-picture-frame'>
            <img className='item-picture' alt='Last Scanned Product' src={require('../resources/product_images/' + id + '.png')} />
          </div>
        </div>
      )
    } else {
      return (
        <div className='component-current-item'>
          <div className='current-item-box-name'>Welcome!</div>
          <div className='current-item-box-price' />
          <div className='current-item-box-id' />
        </div>
      )
    }
  }
}
