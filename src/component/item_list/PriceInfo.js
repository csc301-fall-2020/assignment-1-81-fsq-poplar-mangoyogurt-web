import React from 'react'

import './PriceInfo.css'
import { totalPreTax, tax, total } from '../../logic/CostLogic'

/**
 * Component in ItemList which displays the pre-tax total, tax, and total costs as well as 'paying' functionality
 */
export default class PriceInfo extends React.Component {
  state = {
    paid: false
  }

  handleClick = buttonName => {
    this.setState({
      paid: true
    })
    setTimeout(() => { window.location.reload(false); }, 2000);
  }

  render () {
    if (this.state.paid) {
      return (
        <div className='component-price-info'>
          <div className='value-box-a'>Taxes (13%)</div>
          <div className='value-box-b'>${tax(this.props.cart)}</div>
          <div className='value-box-c'>Total before taxes</div>
          <div className='value-box-d'>${totalPreTax(this.props.cart)}</div>
          <button disabled className='pay-button'>Thank you!</button>
        </div>
      )
    } else {
      return (
        <div className='component-price-info'>
          <div className='value-box-a'>Taxes (13%)</div>
          <div className='value-box-b'>${tax(this.props.cart)}</div>
          <div className='value-box-c'>Total before taxes</div>
          <div className='value-box-d'>${totalPreTax(this.props.cart)}</div>
          <button className='pay-button' onClick={this.handleClick}>Pay ${total(this.props.cart)}</button>
        </div>
      )
    }
  }
}
