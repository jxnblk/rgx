
import React from 'react'

class Box extends React.Component {

  render () {
    let style = {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '8px 4px',
      marginBottom: 16,
      border: '1px solid silver'
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

export default Box

