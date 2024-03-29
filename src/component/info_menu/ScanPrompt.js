import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

import './ScanPrompt.css'

/**
 * Component in the InfoMenu/left side which prompts the user to scan their next item, or provide ability to key in the item's code (since scanning is not actually a feature)
 */
export default class ScanPrompt extends React.Component {  
    handleClick = buttonName => {
        this.props.handler()
    };
  
    render() {
      return (
        <div className="component-scan-prompt">
            <div className="prompt-text">Please scan next item.</div>
            <button className="scan-button" onClick={this.handleClick}><FontAwesomeIcon icon={faKeyboard} /> Key in Code</button>
        </div>
      );
    }
  }
