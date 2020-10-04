import React from 'react'

import './ListComponent.css'

export default class ListComponent extends React.Component {
  render () {
    return (
      <div className='component-list-component'>
            This is where items and their prices would be displayed,
        <li>probably</li>
        <li>using</li>
        <li>a</li>
        <li>list?</li>
            we will see <br />
            obviously this border won't be here
      </div>
    )
  }
}
