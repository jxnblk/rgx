
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
        <Grid gutter={props.base}>
          <Cell min={256}>
            <Box>256</Box>
          </Cell>
          <Cell min={256}>
            <Box>
              <Grid gutter={props.base}>
                <Cell min={256}>
                  <Box>256</Box>
                </Cell>
                <Cell min={256}>
                  <Box>256</Box>
                </Cell>
              </Grid>
            </Box>
          </Cell>
        </Grid>
      </Section>
    )
  }

}

export default NestedGrid

