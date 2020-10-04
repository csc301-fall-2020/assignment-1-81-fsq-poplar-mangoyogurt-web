import React from 'react';

import Display from './Display';
import KeyPad from './Keypad';
import input from '../../../logic/IDInputLogic'
import './IDInput.css'

export default class IDInput extends React.Component {  
  state = {
    id: "0",
    nextItem: "0",
  };

  handleClick = buttonName => {
    this.setState(input(this.state, buttonName));
    setTimeout(() => { this.props.handler(this.state.nextItem) }, 25); //Why is JS like this?
  };
  
    render() {
      return (
        <div className="component-id-input">
          <Display value={this.state.id} />
          <KeyPad clickHandler={this.handleClick} />
        </div>
      );
    }
  }
