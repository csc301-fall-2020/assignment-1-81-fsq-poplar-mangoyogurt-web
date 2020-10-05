import React from "react";

import KeypadButton from "./KeypadButton";
import "./Keypad.css";

export default class Keypad extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-keypad">
        <div>
          <KeypadButton name="7" clickHandler={this.handleClick} />
          <KeypadButton name="8" clickHandler={this.handleClick} />
          <KeypadButton name="9" clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton name="4" clickHandler={this.handleClick} />
          <KeypadButton name="5" clickHandler={this.handleClick} />
          <KeypadButton name="6" clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton name="1" clickHandler={this.handleClick} />
          <KeypadButton name="2" clickHandler={this.handleClick} />
          <KeypadButton name="3" clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton name="0" clickHandler={this.handleClick} />
          <KeypadButton name="DEL" clickHandler={this.handleClick} />
          <KeypadButton name="ENTER" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
