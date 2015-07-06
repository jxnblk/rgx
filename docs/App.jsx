
import React from 'react'
import { Header, Footer } from 'blk'
import Intro from './Intro.jsx'
import ModularScaleDemo from './ModularScaleDemo.jsx'
import GridDemo from './GridDemo.jsx'
import TypographyDemo from './TypographyDemo.jsx'
import NestedGrid from './NestedGrid.jsx'
import RatiosDemo from './RatiosDemo.jsx'
import CellDemo from './CellDemo.jsx'
import Social from './Social.jsx'
import Cta from './Cta.jsx'
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

