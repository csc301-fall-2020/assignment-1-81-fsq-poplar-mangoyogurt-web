import React from 'react';

import CurrentItem from './CurrentItem'
import ScanPrompt from './ScanPrompt'
import OptionsBar from './OptionsBar'
import IDInput from './id_input/IDInput'
import './InfoMenu.css'

export default class InfoMenu extends React.Component {  
    handleClick = buttonName => {
        // TODO!
    };
  
    render() {
      return (
        <div className="component-info-menu">
            <img src={require("../resources/banner_logo.png")} className="banner" alt="Shop Logo"/>
            <CurrentItem />
            <ScanPrompt />
            <OptionsBar />
            <IDInput />
        </div>
      );
    }
  }
