
import React from 'react'

class Cell extends React.Component {

  render () {
    let props = this.props
    let style = {
      boxSizing: 'border-box',
      display: props.inline ? 'inline-block' : 'block',
      //width: props.inline ? (props.min / props.total * props.width) : '100%',
      width: props.inline ? (props.min / props.total * 100) + '%' : '100%',
      verticalAlign: 'top',
      paddingLeft: props.padding,
      paddingRight: props.padding,
      marginBottom: props.marginBottom,
      position: 'relative'
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

Cell.propTypes = {
  min: React.PropTypes.number,
  total: React.PropTypes.number,
  width: React.PropTypes.number,
  padding: React.PropTypes.number,
  marginBottom: React.PropTypes.number,
  inline: React.PropTypes.bool,
}

Cell.defaultProps = {
  min: 640,
  total: 1024,
  width: 1024,
  padding: 0,
  marginBottom: 0,
  inline: false
}

export default Cell

