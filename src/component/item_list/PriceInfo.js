import React from 'react';

import './PriceInfo.css'

export default class PriceInfo extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-price-info">
            <div className="value-box-a">Taxes</div>
            <div className="value-box-b">$[value]</div>
            <div className="value-box-c">Total</div>
            <div className="value-box-d">$[value]</div>
            <button className="pay-button">Pay $[price]</button>
        </div>
      );
    }
  }
