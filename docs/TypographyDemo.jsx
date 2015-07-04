
import React from 'react'
import ms from 'simple-modular-scale'
import { Grid, Cell } from '..'

class TypographyDemo extends React.Component {

  render () {
    let props = this.props
    let scale = ms({
      base: 16,
      factors: [ 9/8, 4/3, 4/3 ],
      length: 7
    })
    let font = 'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif'
    let styles = {
      container: {
        fontFamily: font
      },
      heading: {
        fontFamily: font,
        fontSize: scale[6]
      },
      a: {
        fontFamily: font,
        fontSize: scale[2],
        marginTop: 0
      },
      b: {
        fontFamily: font,
        fontSize: scale[1],
        marginTop: 0
      },
      c: {
        fontFamily: font,
        fontSize: scale[0],
        marginTop: 0
      }
    }
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Typography Demo</h2>
        <h4>{scale.join(' : ')}</h4>
        <Grid gutter={props.base}>
          <Cell min={16 * scale[2]}>
            <h4 style={styles.a}>{scale[2]}px / {16 * scale[2]}px minimum measure</h4>
            <p style={styles.a}>
              {this.props.bacon.substring(0, scale[2] / (1/16) )}...
            </p>
          </Cell>
          <Cell min={16 * scale[1]}>
            <h4 style={styles.b}>{scale[1]}px / {16 * scale[1]}px minimum measure</h4>
            <p style={styles.b}>
              {this.props.bacon.substring(0, scale[1] / (1/32))}...
            </p>
          </Cell>
          <Cell min={16 * scale[0]}>
            <h4 style={styles.c}>{scale[0]}px / {16 * scale[0]}px minimum measure</h4>
            <p style={styles.c}>
              {this.props.bacon}
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default TypographyDemo

