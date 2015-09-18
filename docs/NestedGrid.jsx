
import React from 'react'
import { Grid, Cell } from '../src'
import Section from './Section'
import Box from './Box'

class NestedGrid extends React.Component {

  render () {
    let props = this.props
    return (
      <Section>
        <h2>Nested Grid</h2>
        <Grid gutter={props.base}>
          <Cell min={256}>
            <Box>256 min</Box>
          </Cell>
          <Cell min={256}>
            <Grid gutter={props.base}>
              <Cell min={256}>
                <Box>256 min</Box>
              </Cell>
              <Cell min={256}>
                <Box>256 min</Box>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
        <Grid gutter={props.base}>
          <Cell min={256} max={320}>
            <Box>256/320 min/max</Box>
          </Cell>
          <Cell min={256}>
            <Grid gutter={props.base}>
              <Cell min={256}>
                <Box>256 min</Box>
              </Cell>
              <Cell min={256}>
                <Box>256 min</Box>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
        <Grid>
          <Cell min={512} max={768}>
            <p>
              The Cells in this demo all have a <code>min</code> value of 256, and two Cells are nested within another.
              The two top-level Cells take up 50% of the width, and the nested Cells are 50% of the parent Cell.
              Since the collapsing behavior is based on the container Grid’s width, the nested Cells will collapse before the parent Cells do.
              In the second row, the first Cell has a <code>max</code> of 320, and the remaining Cell stretches to fill the space.
            </p>
          </Cell>
          <Cell min={128} />
        </Grid>
      </Section>
    )
  }

}

export default NestedGrid

