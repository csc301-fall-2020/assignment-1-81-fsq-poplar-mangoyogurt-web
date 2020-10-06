import React from 'react'

import './Display.css'

/**
 * Numerical display for the "key in code" IDInput keypad
 */
export default class Display extends React.Component {
  render () {
    return (
      <div className='component-display'>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
