
import React from 'react'
import { Grid, Cell } from '../src'
import Box from './Box'

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
        <Grid>
          <Cell min={160} max={256}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={128} max={160}>
            <Box>min/max</Box>
          </Cell>
          <Cell min={64}>
            <Box>min</Box>
          </Cell>
        </Grid>
        <Grid gutter={0}>
          <Cell min={128} max={256}>
            <Box>128/256</Box>
          </Cell>
          <Cell min={128}>
            <Box>128</Box>
          </Cell>
        </Grid>
        <Grid>
          <Cell min={256} >
            <Box>256</Box>
          </Cell>
          <Cell min={256}>
            <Box>256</Box>
          </Cell>
          <Cell min={256} max={320}>
            <Box>256/320</Box>
          </Cell>
        </Grid>
        <Grid>
          <Cell min={160}>
            <Box>160</Box>
          </Cell>
          <Cell min={320} max={768}>
            <Box>320/768</Box>
          </Cell>
          <Cell min={128}>
            <Box>128</Box>
          </Cell>
        </Grid>
        <Grid gutter={16}>
          <Cell min={128} max={160}>
            <Box>128/160</Box>
          </Cell>
          <Cell min={128} max={192}>
            <Box>128/192</Box>
          </Cell>
          <Cell min={96}>
            <Box>min 96</Box>
          </Cell>
          <Cell min={256}>
            <Box>min 256</Box>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default Dev

