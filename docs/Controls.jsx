
import React from 'react'
import { Range } from 'rebass'
import { Grid, Cell } from '..'

class Controls extends React.Component {

  render () {
    let props = this.props
    return (
      <div>
        <Grid gutter={16}>
          <Cell min={128}>
            <Range
              label='Base'
              name='base'
              max={128}
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

