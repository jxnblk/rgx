
import React from 'react'
import { Grid, Cell } from '..'
import Section from './Section.jsx'
import Box from './Box.jsx'

class NestedGrid extends React.Component {

  render () {
    let props = this.props
    return (
      <Section>
        <h2>Nested Grid</h2>
        <Grid>
          <Cell min={512}>
            <p>
              The Cells below all have a <code>min</code> value of 256, and two Cells are nested within another. The two top-level Cells take up 50% of the width, and the nested Cells are 50% of the parent Cell. Since the collapsing behavior is based on the container Grid’s width, the nested Cells will collapse before the parent Cells do.
            </p>
          </Cell>
          <Cell min={384} />
        </Grid>
        <Grid gutter={props.base}>
          <Cell min={256}>
            <Box>256</Box>
          </Cell>
          <Cell min={256}>
            <Grid gutter={props.base}>
              <Cell min={256}>
                <Box>256</Box>
              </Cell>
              <Cell min={256}>
                <Box>256</Box>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </Section>
    )
  }

}

export default NestedGrid

