
import React from 'react'
import ms from 'simple-modular-scale'
import { Grid, Cell } from '..'
import GridDemo from './GridDemo.jsx'
import Section from './Section.jsx'

class ModularScaleDemo extends React.Component {

  render () {
    let props = this.props
    let scale = ms({
      base: 4 * props.base,
      ratios: [3/2, 4/3],
      length: 8 
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

    return (
      <Section>
        {g1.map(function(grid, i) {
          return (
            <GridDemo key={i}
              gutter={props.base}
              grid={grid} />
            )
        })}
        <Grid>
          <Cell min={scale[7]} max={scale[6]}>
            <p>
              Each Cell has a <code>min</code> prop that defines the minimum width at which it can be set inline as a column.
              Once set inline, each Cell’s width is determined as the ratio of its minimum width to the total for all Cells in a Grid row.
            </p>
            <p>
              Sizes in this demo are based on a <a href='//github.com/jxnblk/simple-modular-scale'>modular scale</a>: {scale.join(' : ')}
            </p>
          </Cell>
          <Cell min={scale[0]} />
        </Grid>
      </Section>
    )
  }

}

export default ModularScaleDemo

