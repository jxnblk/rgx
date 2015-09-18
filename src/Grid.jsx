
import React from 'react'
import { throttle } from 'lodash'

const win = typeof window !== 'undefined' ? window : false

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
    const el = React.findDOMNode(this)
    const width = el.offsetWidth
    this.setState({ width })
  }

  getMinTotal () {
    let total = 0
    const { children, min } = this.props
    React.Children.map(children, (child, i) => {
      let childMin = child.props.min || false
      if (!childMin) {
        childMin = min
      }
      total += childMin
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
    const { children, gutter } = this.props
    const { width } = this.state
    const style = {
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
      position: 'relative'
    }

    // min width denominator
    const dmin = this.getMinTotal()
    // min values of max cells
    let maxmins = []
    // max values of max cells
    let maxes = []

    React.Children.map(children, (child) => {
      if (child.props.max && child.props.min / dmin * width > child.props.max) {
        maxes.push(child.props.max)
        maxmins.push(child.props.min)
      }
    })

    // sum of max cell values
    const maxSum = maxes.length ? maxes.reduce((a, b) => { return a + b }) : 0
    // sum of min values for max cells
    const maxminSum = maxmins.length ? maxmins.reduce((a, b) => { return a + b }) : 0
    // percent offset from remaining min cell widths
    const offset = (maxSum / width) / (children.length - maxes.length)
    const denominator = dmin - maxminSum

    // set child props
    const modifiedChildren = React.Children.map(children, (child) => {
      let childWidth = child.props.min / denominator - offset
      if (child.props.max && child.props.min / dmin * width > child.props.max) {
        childWidth = child.props.max / width
      }
      let childProps = {
        width: childWidth,
        inline: dmin < width
      }
      if (!child.props.padding) {
        childProps.padding = gutter
      }
      return React.cloneElement(child, childProps)
    })

    return (
      <div style={style}>
        {modifiedChildren}
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

