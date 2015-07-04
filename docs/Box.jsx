
import React from 'react'

class Box extends React.Component {

  render () {
    let style = {
      padding: 16,
      border: '2px solid silver'
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

export default Box

