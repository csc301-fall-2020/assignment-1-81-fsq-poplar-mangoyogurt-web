import React from 'react';

import ItemCount from './ItemCount'
import ListComponent from './ListComponent'
import PriceInfo from './PriceInfo'

import './ItemList.css'

export default class ItemList extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-item-list">
            <ItemCount />
            <ListComponent />
            <PriceInfo />
        </div>
      );
    }
  }
