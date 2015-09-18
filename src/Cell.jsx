
import React from 'react'

class Cell extends React.Component {

  render () {
    let props = this.props
    let style = {
      boxSizing: 'border-box',
      display: props.inline ? 'inline-block' : 'block',
      width: props.inline ? props.width * 100 + '%' : '100%',
      verticalAlign: 'top',
      paddingLeft: props.padding,
      paddingRight: props.padding,
      position: 'relative'
    }

    return (
      <div ref='cell' style={style}>
        {this.props.children}
      </div>
    )
  }
}

Cell.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  /*
  max: function(props, name) {
    if (typeof props[name] === 'undefined') {
      return false
    } else if (typeof props[name] !== 'number') {
      return new Error('max should be a number');
    } else if (props[name] > props.min) {
      return new Error('max should be greater than min');
    }
  },
  */
  width: React.PropTypes.number,
  padding: React.PropTypes.number,
  inline: React.PropTypes.bool,
}

Cell.defaultProps = {
  min: 640,
  max: null,
  width: 100,
  padding: 0,
  inline: false
}

export default Cell

