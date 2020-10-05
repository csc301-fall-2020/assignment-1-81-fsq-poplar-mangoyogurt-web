import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './ItemCount.css'

export default class ItemCount extends React.Component {
  render () {
    return (
      <div className='component-item-count'>
        <FontAwesomeIcon icon={faShoppingCart} /> {this.props.length} items
      </div>
    )
  }
}
