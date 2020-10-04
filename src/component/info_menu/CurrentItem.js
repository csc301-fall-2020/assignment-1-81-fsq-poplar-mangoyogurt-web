import React from 'react'

import './CurrentItem.css'
import PRODUCTS from '../resources/products'

export default class CurrentItem extends React.Component {
  render () {
    const id = this.props.item

    if (PRODUCTS[id]) {
      return (
        <div className='component-current-item'>
              <div className="current-item-box-name">{PRODUCTS[id].name}</div>
              <div className="current-item-box-price">{"$" + PRODUCTS[id].price}</div>
              <div className="current-item-box-id">{id}</div>
              <div className="item-picture-frame">
                {/* <img className="item-picture" src={require("../resources/product_images/" + this.props.item)} /> */}
              </div>
        </div>
      )
    } else {
      return (
        <div className='component-current-item'>
              <div className="current-item-box-name"></div>
              <div className="current-item-box-price"></div>
              <div className="current-item-box-id"></div>
        </div>
      )
    }
  }
}
