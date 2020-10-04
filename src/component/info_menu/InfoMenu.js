import React from 'react';

import CurrentItem from './CurrentItem'
import ScanPrompt from './ScanPrompt'
import OptionsBar from './OptionsBar'
import IDInput from './id_input/IDInput'
import './InfoMenu.css'

export default class InfoMenu extends React.Component {  
    constructor() {
      super()

      this.showKeypadHandler = this.showKeypadHandler.bind(this)
      this.newIDHandler = this.newIDHandler.bind(this)
      this.state = {
        nextItem: "0",
        showKeypad: false
      }
    }

    showKeypadHandler() {
      if (this.state.showKeypad) {
        this.setState({showKeypad: false})
      } else {
        this.setState({showKeypad: true})
      }
    }

    newIDHandler(newNI) {
      this.setState({
        nextItem: newNI
      })
    }
  
    render() {


      return (
        <div className="component-info-menu">
            <img src={require("../resources/banner_logo.png")} className="banner" alt="Shop Logo"/>
            <CurrentItem item={this.state.nextItem}/>
            <ScanPrompt handler={this.showKeypadHandler}/>
            <OptionsBar />
            {this.state.showKeypad
              ? <IDInput handler={this.newIDHandler}/>
              : <div/>
            }
            
        </div>
      );
    }
  }
