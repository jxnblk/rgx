
import React from 'react'

let win = typeof window !== 'undefined' ? window : false

class Grid extends React.Component {

  constructor () {
    super ()
    this.updateWidth = this.updateWidth.bind(this)
    this.getTotal = this.getTotal.bind(this)
    this.state = {
      width: 768
    }
  }

  updateWidth () {
    let el = React.findDOMNode(this)
    let width = el.offsetWidth
    this.setState({ width: width })
  }

  getTotal () {
    let total = 0
    let props = this.props
    let width = this.state.width
    let inline = false
    React.Children.map(this.props.children, function(c, i) {
      let min = c.props.min || false
      if (!min) {
        min = c.props.x * width || props.min
      }
      total += min
    })
    if (total < width) {
      inline = true
    }
    return { total, inline }
  }

  componentDidMount () {
    this.updateWidth()
    if (win) {
      win.addEventListener('resize', this.updateWidth)
    }
  }

  componentDidUnmount () {
    if (win) {
      win.removeEventListener('resize', this.updateWidth)
    }
  }

  componentWillReceiveProps () {
    //this.updateWidth()
  }

  render () {
    let props = this.props
    let state = this.state
    let style = {
      overflow: 'hidden',
      marginLeft: -props.gutter,
      marginRight: -props.gutter,
    }
    let childSizes = this.getTotal()
    let children = React.Children.map(this.props.children, function(c) {
      return React.cloneElement(c, {
        padding: props.gutter,
        width: state.width,
        total: childSizes.total,
        inline: childSizes.inline
      })
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
}

Grid.defaultProps = {
  min: 640,
}

export default Grid

