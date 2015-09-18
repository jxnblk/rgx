
import React from 'react'
import { Header, Footer } from 'blk'
import Intro from './Intro'
import ModularScaleDemo from './ModularScaleDemo'
import GridDemo from './GridDemo'
import TypographyDemo from './TypographyDemo'
import NestedGrid from './NestedGrid'
import RatiosDemo from './RatiosDemo'
import CellDemo from './CellDemo'
import Social from './Social'
import Cta from './Cta'
import css from './base.css'

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
        <Intro />
        <ModularScaleDemo {...state} />
        <TypographyDemo {...props} {...state} />
        <NestedGrid {...props} {...state} />
        <RatiosDemo {...props} {...state} />
        <CellDemo />
        <Cta />
        <Footer {...props} />
      </div>
    )
  }

}

export default App

