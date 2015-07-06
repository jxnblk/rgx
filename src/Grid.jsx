
import React from 'react'

let win = typeof window !== 'undefined' ? window : false

class Grid extends React.Component {

  constructor () {
    super ()
    this.updateWidth = this.updateWidth.bind(this)
    this.getMinTotal = this.getMinTotal.bind(this)
    this.getMaxTotal = this.getMaxTotal.bind(this)
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

  getMaxTotal () {
    let tmin = this.getMinTotal()
    let total = 0
    let props = this.props
    let state = this.state
    React.Children.map(this.props.children, function(c, i) {
      let max = 0
      if (c.props.max && c.props.min/tmin * state.width > c.props.max) {
        max = c.props.max
      }
      total += max
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

      position: 'relative'
    }
    let tmin = this.getMinTotal()
    let tmax = this.getMaxTotal()
    let offset = 0
    let toff = 0
    let nmax = 0

    React.Children.map(this.props.children, function(c) {
      if (c.props.max && c.props.min / tmin * state.width > c.props.max) {
        nmax++
        let max = c.props.max
        let min = c.props.min
        let w = state.width

        // Works for situations with just one max Cell
        //offset -= (((tmin - min) / (1 - max / w)) - tmin + offset)
        //offset += ((tmin - min) / (1 - (max / w) - ((tmax - max) / w))) - tmin

        //offset -= ( ((tmin - min) / (1 - (max / w) + ((tmax - max) / w))) - tmin)
        
        // Test
        //let test = (max/w) + ((tmin - min) / (tmin - offset))
        let maxes = (max/w) + ((tmax - max) / w)
        let leftover = (1 - maxes)
        //console.log('TEST', offset.toFixed(2), test.toFixed(2), Math.round(test * 10000) / 10000 === 1)
        console.log('MAXES', maxes.toFixed(2))
        console.log('LEFTOVER', leftover.toFixed(2))
        toff += min
        offset += max / w 
        
      }
    })

    let children = React.Children.map(this.props.children, function(c) {
      let width = (c.props.min / (tmin - toff)) - (offset / (props.children.length - nmax))
      console.log('width', width)
      if (c.props.max && c.props.min / tmin * state.width > c.props.max) {
        width = c.props.max / state.width
      }
      let childProps = {
        width: width,
        gridWidth: state.width,
        tmin: tmin - offset,
        inline: tmin < state.width
      }
      if (!c.props.padding) {
        childProps.padding = props.gutter
      }
      return React.cloneElement(c, childProps)
    })

    let abs = {
      fontSize: 12,
      position: 'absolute',
      right: 0,
      color: 'red'
    }
    return (
      <div style={style}>
        <code style={abs}>{state.width}</code>
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

