
import React from 'react'

class Box extends React.Component {

  render () {
    let style = {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '8px 4px',
      //backgroundColor: '#eee',
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

