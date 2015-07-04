
import React from 'react'
import { Grid, Cell } from '..'
import Controls from './Controls.jsx'
import Box from './Box.jsx'
import css from './base.css'
import modular from './modular-scale'

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

    let ms = modular(16, [1.5, 4/3], 11)

    let grids = []
    for (var i = ms.length - 1; i > 0; i--) {
      grids.push({
        cells: [
          { i: i, min: ms[i] },
          { i: i - 1 || 0, min: ms[i - 1] || ms[0] },
        ]
      })
    }

    return (
      <div>
        <h1 className='mb0'>rgx</h1>
        <h2 className='h3 mt0'>React Grid System</h2>
        <p>
          Constraint-based grid with minimum column widths
        </p>
        <hr />
        <pre>
          {ms.join(' . ')}
        </pre>
        <div>
          {grids.map(function(g, i) {
            return (
              <Grid key={i} gutter={state.gutter}>
                {g.cells.map(function(c, i) {
                  return (
                    <Cell key={i}
                      min={c.min}>
                      <Box>
                        <h4>Cell {c.i} min {c.min}</h4>
                      </Box>
                    </Cell>
                  )
                })}
              </Grid>
            )
          })}
        </div>
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

