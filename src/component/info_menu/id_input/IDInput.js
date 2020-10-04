import React from 'react';

import Display from './Display';
import KeyPad from './Keypad';
import './IDInput.css'

export default class IDInput extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-id-input">
          <Display value="0" />
          <KeyPad clickHandler={this.handleClick} />
        </div>
      );
    }
  }
