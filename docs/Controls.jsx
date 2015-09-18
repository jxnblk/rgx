
import React from 'react'
import { Range } from 'rebass'
import { Grid, Cell } from '../src'

class Controls extends React.Component {

  render () {
    let props = this.props
    return (
      <div>
        <Grid gutter={16}>
          <Cell min={128}>
            <Range
              label={'Modular Scale Base ' + props.base}
              name='base'
              min={1}
              max={32}
              value={props.base}
              onChange={props.onChange} />
          </Cell>
          <Cell min={128}>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default Controls

