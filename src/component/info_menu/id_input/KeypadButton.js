import React from "react";

import "./KeypadButton.css";

/**
 * Custom button used in the "key in code" keypad
 */
export default class KeypadButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div className="component-keypad-button">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
