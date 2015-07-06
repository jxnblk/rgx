
import React from 'react'
import { Grid, Cell } from '..'
import Box from './Box.jsx'

class Dev extends React.Component {

  render () {
    let styles = {
      container: {
        paddingTop: 48,
        paddingBottom: 48,
        marginBottom: 48,
        border: '1px solid red'
      }
    }
    return (
      <div style={styles.container}>
        <Grid gutter={0}>
          <Cell min={128} max={256}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={64}>
            <Box>min</Box>
          </Cell>
        </Grid>
        <Grid>
          <Cell min={128} max={256}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={128} max={320}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={256}>
            <Box>min</Box>
          </Cell>
        </Grid>
        <Grid>
          <Cell min={256} max={320}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={256} >
            <Box>min</Box>
          </Cell>
          <Cell min={256}>
            <Box>min</Box>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default Dev

