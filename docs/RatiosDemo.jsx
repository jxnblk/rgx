
import React from 'react'
import ms from 'simple-modular-scale'
import { Grid, Cell } from '..'
import Section from './Section.jsx'
import GridDemo from './GridDemo.jsx'

class RatiosDemo extends React.Component {

  render () {
    let props = this.props
    let scale = ms({
        base: 64,
        ratios: [3/2, 4/3],
        length: 8
      }).reverse()
    let grids = []

    for (var i = 0; i < scale.length - 1; i++) {
      if (i % 2 === 0) {
        grids.push({
          cells: [
            { min: scale[i] },
            { min: scale[i+1] }
          ]
        })
      }
    }

    return (
      <Section>
        <h2>Similar Ratios</h2>
        {grids.map(function(grid, i) {
          return (
            <GridDemo key={i}
              gutter={props.base}
              grid={grid} />
          )
        })}
        <Grid>
          <Cell min={512} max={768}>
            <p>
              Cells with similar ratios will align horizontally when they are set inline. Different `min` values will cause the Cells to collapse at different widths.
            </p>
          </Cell>
          <Cell min={128} />
        </Grid>
      </Section>
    )
  }

}

export default RatiosDemo

