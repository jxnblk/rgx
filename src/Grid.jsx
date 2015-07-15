
import React from 'react'
import { throttle } from 'lodash'

let win = typeof window !== 'undefined' ? window : false

class Grid extends React.Component {

  constructor () {
    super ()
    this.updateWidth = this.updateWidth.bind(this)
    this.getMinTotal = this.getMinTotal.bind(this)
    this.state = {
      width: 768
    }
  }

  updateWidth () {
    let el = React.findDOMNode(this)
    let width = el.offsetWidth
    this.setState({ width: width })
  }

  getMinTotal () {
    let total = 0
    let props = this.props
    React.Children.map(this.props.children, function(c, i) {
      let min = c.props.min || false
      if (!min) {
        min = props.min
      }
      total += min
    })
    return total
  }

  componentDidMount () {
    this.updateWidth()
    if (win) {
      this.startListeningForResize()
    }
  }

  componentDidUnmount () {
    if (win) {
      this.stopListeningForResize()
    }
  }

  componentDidUpdate (prevProps) {
    if (win && prevProps.throttleResize !== this.props.throttleResize) {
      this.stopListeningForResize()
      this.startListeningForResize()
    }
  }

  startListeningForResize () {
    this.throttledUpdateWidth = throttle(this.updateWidth, this.props.throttleResize)
    win.addEventListener('resize', this.throttledUpdateWidth)
  }

  stopListeningForResize () {
    win.removeEventListener('resize', this.throttledUpdateWidth)
  }

  render () {
    let props = this.props
    let state = this.state
    let style = {
      overflow: 'hidden',
      marginLeft: -props.gutter,
      marginRight: -props.gutter,

      position: 'relative'
    }

    // min width denominator
    let dmin = this.getMinTotal()
    // min values of max cells
    let maxmins = []
    // max values of max cells
    let maxes = []

    React.Children.map(this.props.children, function(c) {
      if (c.props.max && c.props.min / dmin * state.width > c.props.max) {
        maxes.push(c.props.max)
        maxmins.push(c.props.min)
      }
    })

    // sum of max cell values
    let maxSum = maxes.length ? maxes.reduce(function(a, b) { return a + b }) : 0
    // sum of min values for max cells
    let maxminSum = maxmins.length ? maxmins.reduce(function(a, b) { return a + b }) : 0
    // percent offset from remaining min cell widths
    let offset = (maxSum / state.width) / (props.children.length - maxes.length)
    let denominator = dmin - maxminSum

    // set child props
    let children = React.Children.map(this.props.children, function(c) {
      let width = c.props.min / denominator - offset
      if (c.props.max && c.props.min / dmin * state.width > c.props.max) {
        width = c.props.max / state.width
      }
      let childProps = {
        width: width,
        inline: dmin < state.width
      }
      if (!c.props.padding) {
        childProps.padding = props.gutter
      }
      return React.cloneElement(c, childProps)
    })

    return (
      <div style={style}>
        {children}
      </div>
    )
  }

}

Grid.propTypes = {
  min: React.PropTypes.number,
  gutter: React.PropTypes.number,
  throttleResize: React.PropTypes.number,
}

Grid.defaultProps = {
  min: 640,
  gutter: 0,
  throttleResize: 200
}

export default Grid

