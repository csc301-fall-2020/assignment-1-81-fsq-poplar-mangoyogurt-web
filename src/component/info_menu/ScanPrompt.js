import React from 'react';

import './ScanPrompt.css'

export default class ScanPrompt extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-scan-prompt">
            <div className="prompt-text">Please scan next item.</div>
            <button className="scan-button">Key in Code</button>
        </div>
      );
    }
  }
