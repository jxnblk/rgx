
import React from 'react'
import { Grid, Cell } from '..'
import { Header, Footer } from 'blk'
import ModularScaleDemo from './ModularScaleDemo.jsx'
import GridDemo from './GridDemo.jsx'
import TypographyDemo from './TypographyDemo.jsx'
import NestedGrid from './NestedGrid.jsx'
import RatiosDemo from './RatiosDemo.jsx'
import CellDemo from './CellDemo.jsx'
import Box from './Box.jsx'
import Section from './Section.jsx'
import Controls from './Controls.jsx'
import Readme from './Readme.jsx'
import Social from './Social.jsx'
import css from './base.css'
import ms from 'simple-modular-scale'

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      base: 16,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let state = this.state
    state[e.target.name] = parseFloat(e.target.value)
    this.setState(state)
  }

  render () {
    let props = this.props
    let state = this.state

    return (
      <div>
        <Header {...props} />
        <Social {...props} />
        <ModularScaleDemo {...state} />
        {/*
        <Controls
          {...state}
          {...props}
          onChange={this.handleChange} />
        */}
        <TypographyDemo {...props} {...state} />
        <NestedGrid {...props} {...state} />
        <RatiosDemo {...props} {...state} />
        <CellDemo />
        <Readme />
        <Footer {...props} />
      </div>
    )
  }

}

export default App

