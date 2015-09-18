
import React from 'react'
import ms from 'simple-modular-scale'
import { Grid, Cell } from '../src'
import Section from './Section'

class TypographyDemo extends React.Component {

  render () {
    let props = this.props
    let scale = ms({
      base: props.base,
      ratios: [ 9/8, 4/3, 4/3 ],
      length: 6
    })
    let font = 'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif'
    let styles = {
      container: {
        fontFamily: font
      },
      heading: {
        fontFamily: font,
        fontSize: scale[5]
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
      <Section>
        <div style={styles.container}>
          <h2 style={styles.heading}>Typography Demo</h2>
          <p style={styles.b}>
            In this example, font sizes are based on a modular scale, and each Cell’s <code>min</code> property is set to the font size multiplied by 16.
          </p>
          <Grid gutter={props.base}>
            <Cell min={16 * scale[2]} max={32 * scale[2]}>
              <h4 style={styles.a}>{scale[2]}px • {16 * scale[2]}/{32 * scale[2]}px min/max</h4>
              <p style={styles.a}>
                {this.props.bacon.substring(0, scale[2] / (1/16) )}...
              </p>
            </Cell>
            <Cell min={16 * scale[1]} max={32 * scale[1]}>
              <h4 style={styles.b}>{scale[1]}px • {16 * scale[1]}/{32 * scale[1]}px min/max</h4>
              <p style={styles.b}>
                {this.props.bacon.substring(0, scale[1] / (1/32))}...
              </p>
            </Cell>
            <Cell min={16 * scale[0]}>
              <h4 style={styles.c}>{scale[0]}px • {16 * scale[0]}px min</h4>
              <p style={styles.c}>
                {this.props.bacon}
              </p>
            </Cell>
            <Cell min={.5} />
          </Grid>
        </div>
      </Section>
    )
  }

}

export default TypographyDemo

