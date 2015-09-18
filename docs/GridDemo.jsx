
import React from 'react'
import { Grid, Cell } from '../src'
import Box from './Box'

class GridDemo extends React.Component {

  render () {
    let props = this.props
    return (
      <Grid gutter={props.gutter}>
        {props.grid.cells.map(function(cell, i) {
          return (
            <Cell key={i}
              min={cell.min}
              marginBottom={16}>
              <Box>{cell.min} min</Box>
            </Cell>
            )
        })}
      </Grid>
    )
  }

}

GridDemo.propTypes = {
  gutter: React.PropTypes.number,
  grid: React.PropTypes.object
}

export default GridDemo

