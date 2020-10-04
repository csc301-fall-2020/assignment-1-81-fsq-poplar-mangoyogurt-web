import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLanguage, faVolumeMute, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import './OptionsBar.css'

export default class OptionsBar extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-options-bar">
            <button><FontAwesomeIcon icon={faUser} /><br/>Assistance</button> 
            <button><FontAwesomeIcon icon={faLanguage} /><br/>Francais</button> 
            <button><FontAwesomeIcon icon={faVolumeMute} /><br/>Volume</button> 
            <button><FontAwesomeIcon icon={faShoppingBag} /><br/>Own Bag</button> 
        </div>
      );
    }
  }
