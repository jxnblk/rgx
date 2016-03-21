
import React from 'react'

/**
 * Child component of Grid that displays inline when
 * there is enough space in the container
 */

class Cell extends React.Component {

  render () {
    const { inline, width, padding, children, max } = this.props
    const style = {
      boxSizing: 'border-box',
      display: inline ? 'inline-block' : 'block',
      width: inline ? `${width * 100}%` : '100%',
      maxWidth: `${max}px`,
      verticalAlign: 'top',
      paddingLeft: padding,
      paddingRight: padding,
      position: 'relative'
    }

    return (
      <div ref='cell' style={style}>
        {children}
      </div>
    )
  }
}

Cell.propTypes = {
  /** Min-width to display inline */
  min: React.PropTypes.number,
  /** Max-width for Cell */
  max: React.PropTypes.number,
  /** Width of cell when inline is true - value should be 0–1 */
  width: React.PropTypes.number,
  /** Left and right padding for creating gutters */
  padding: React.PropTypes.number,
  /** Sets display inline-block and activates width prop */
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

