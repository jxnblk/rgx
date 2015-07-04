
import React from 'react'
import ms from 'simple-modular-scale'

class Scale extends React.Component {

  render () {
    let scale = ms()
    return (
      <span>
        {this.props.scale.join(' : ')}
      </span>
    )
  }

}

export default Scale
