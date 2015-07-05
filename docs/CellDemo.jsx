
import React from 'react'
import { Grid, Cell } from '..'
import Section from './Section.jsx'
import Box from './Box.jsx'

class CellDemo extends React.Component {

  render () {
    let props = this.props
    return (
      <Section>
        <h2>Cell</h2>
        <Grid>
          <Cell min={512}>
            <p>
              The Cell component can be used independently to manually arrange elements inline with a set percentage based width.
            </p>
          </Cell>
          <Cell min={384} />
        </Grid>
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
      </Section>
    )
  }

}

export default CellDemo

