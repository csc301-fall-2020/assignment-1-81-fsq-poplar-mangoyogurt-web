import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faExclamation ,faLanguage, faVolumeMute, faVolumeUp, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import './OptionsBar.css'

/**
 * Component which houses quality-of-life features, present at the button of the InfoMenu component/left side
 * Disclaimer I don't actually know what the "Own Bag" button does so it does nothing
 */
export default class OptionsBar extends React.Component {  
    state = {
      muted: false,
      help: false
    }

    handleHelpClick = buttonName => {
      this.setState({
        help: true
      })
      setTimeout(() => {
        this.setState({
          help: false
        })
      }, 1000);
    }

    handleVolumeClick = buttonName => {
      this.setState({
        muted: !this.state.muted
      })
    }
  
    render() {
      return (
        <div className="component-options-bar">
            <button onClick={this.handleHelpClick}><FontAwesomeIcon icon={this.state.help ? faExclamation : faUser} /><br/>{this.state.help ? "Coming!" : "Help"}</button> 
            <button disabled><FontAwesomeIcon icon={faLanguage} /><br/>Language</button> 
            <button onClick={this.handleVolumeClick}><FontAwesomeIcon icon={this.state.muted ? faVolumeMute : faVolumeUp} /><br/>Volume</button> 
            <button><FontAwesomeIcon icon={faShoppingBag} /><br/>Own Bag</button>
        </div>
      );
    }
  }
