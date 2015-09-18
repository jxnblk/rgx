
import React from 'react'
import { Grid, Cell } from '../src'
import Section from './Section'
import Box from './Box'

class CellDemo extends React.Component {

  render () {
    let props = this.props
    return (
      <Section>
        <h2>Cell</h2>
        <div>
          <Cell width={1/4} inline>
            <Box>
              <code>
                {'<Cell width={1/4} inline />'}
              </code>
            </Box>
          </Cell>
          <Cell width={1/2} inline>
            <Box>
              <code>
                {'<Cell width={1/2} inline />'}
              </code>
            </Box>
          </Cell>
          <Cell width={1/4} inline>
            <Box>
              <code>
                {'<Cell width={1/4} inline />'}
              </code>
            </Box>
          </Cell>
        </div>
        <Grid>
          <Cell min={512} max={768}>
            <p>
              The Cell component can be used independently to manually arrange elements inline with a set percentage based width.
            </p>
          </Cell>
          <Cell min={128} />
        </Grid>
      </Section>
    )
  }

}

export default CellDemo

