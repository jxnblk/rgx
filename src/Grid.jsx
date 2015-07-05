
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
    let total = this.getTotal()
    let children = React.Children.map(this.props.children, function(c) {
      let childProps = {
        width: c.props.min / total,
        inline: total < state.width
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
}

Grid.defaultProps = {
  min: 640,
  gutter: 0
}

export default Grid

