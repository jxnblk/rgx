
import React from 'react'
import { Grid, Cell } from '..'
import { Header, Footer } from 'blk'
import GridDemo from './GridDemo.jsx'
import Box from './Box.jsx'
import Section from './Section.jsx'
import Controls from './Controls.jsx'
import Scale from './Scale.jsx'
import Readme from './Readme.jsx'
import css from 'blk/src/css/blk.css'
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

    let scale = ms({
      base: state.base,
      factors: [3/2, 4/3],
      length: 12 
    })

    let g1 = []
    for (var i = scale.length - 1; i > -1; i--) {
      let l = scale.length - i
      let cells = []
      let min = scale[i]
      for (var j = 0; j < l; j++) {
        cells.push({ min: min })
      }
      g1.push({ cells: cells })
    }

    let g2 = [
      { cells: [ { min: scale[11] }, { min: scale[10] } ] },
      { cells: [ { min: scale[9] }, { min: scale[8] } ] },
      { cells: [ { min: scale[7] }, { min: scale[6] } ] },
      { cells: [ { min: scale[10] }, { min: scale[9] } ] },
      { cells: [ { min: scale[8] }, { min: scale[7] } ] },
      { cells: [ { min: scale[6] }, { min: scale[5] } ] },
    ]

    return (
      <div>
        <Header {...this.props} />
        <Section>
          <h2>
            <Scale scale={scale} />
          </h2>
          {g1.map(function(grid, i) {
            return (
              <GridDemo key={i}
                gutter={state.base}
                grid={grid} />
            )
          })}
        </Section>
        <Section>
          {g2.map(function(grid, i) {
            return (
              <GridDemo key={i}
                gutter={state.base}
                grid={grid} />
            )
          })}
        </Section>
        <Section>
          <Readme />
        </Section>
        <Footer {...this.props} />
      </div>
    )
  }

}

export default App

