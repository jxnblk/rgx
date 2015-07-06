
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

    let abs = {
      fontSize: 12,
      position: 'absolute',
      bottom: 0,
      left: 0,
      color: 'blue'
    }
    return (
      <div style={style}>
        <code style={abs}>
          {props.min}/{props.max}
          {(props.width * props.gridWidth).toFixed(1)}
        </code>
        {this.props.children}
      </div>
    )
  }
}

Cell.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
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

