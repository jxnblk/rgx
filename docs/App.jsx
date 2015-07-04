
import React from 'react'
import { Grid, Cell } from '..'
import Controls from './Controls.jsx'
import Box from './Box.jsx'
import css from './base.css'

const scale = [
    128,
    192,
    256,
    384,
    512,
    768,
    1024,
]

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      gutter: 24
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let state = this.state
    state[e.target.name] = parseFloat(e.target.value)
    this.setState(state)
  }

  render () {
    let props = this.props
    let state = this.state

    return (
      <div>
        <h1 className='mb0'>rgx</h1>
        <h2 className='h3 mt0'>React Grid System</h2>
        <p>
          Constraint-based grid with minimum column widths
        </p>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={scale[5]}>
              <Box>
                <h3>Cell min {scale[5]}</h3>
              </Box>
            </Cell>
            <Cell min={scale[4]}>
              <Box>
                <h3>Cell min {scale[4]}</h3>
              </Box>
            </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={scale[3]}>
              <Box>
                <h3>Cell min {scale[3]}</h3>
              </Box>
            </Cell>
            <Cell min={scale[2]}>
              <Box>
                <h3>Cell min {scale[2]}</h3>
              </Box>
            </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={scale[4]}>
              <Box>
                <h3>Cell min {scale[4]}</h3>
              </Box>
            </Cell>
            <Cell min={scale[3]}>
              <Box>
                <h3>Cell min {scale[3]}</h3>
              </Box>
            </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={scale[2]}>
              <Box>
                <h3>Cell min {scale[2]}</h3>
              </Box>
            </Cell>
            <Cell min={scale[1]}>
              <Box>
                <h3>Cell min {scale[1]}</h3>
              </Box>
            </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={256}>
              <Box> <h3>Cell min 256</h3> </Box>
            </Cell>
            <Cell min={256}>
              <Box> <h3>Cell min 256</h3> </Box>
            </Cell>
            <Cell min={256}>
              <Box> <h3>Cell min 256</h3> </Box>
            </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
          </Grid>
        </div>
        <hr />
        <div className=''>
          <Grid gutter={state.gutter}>
            <Cell min={128}> <Box> <h3>Cell 128</h3> </Box> </Cell>
            <Cell min={320}> <Box> <h3>Cell 320</h3> </Box> </Cell>
          </Grid>
        </div>
        <div className='py3'>
          <Controls {...state} 
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }

}

export default App

