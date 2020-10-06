import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './ItemCount.css'

/**
 * Displays the current number of items in user's cart on right side/ItemList
 */
export default class ItemCount extends React.Component {
  render () {
    return (
      <div className='component-item-count'>
        <FontAwesomeIcon icon={faShoppingCart} /> {this.props.length} items
      </div>
    )
  }
}
