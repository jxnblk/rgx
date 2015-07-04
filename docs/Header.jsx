
import React from 'react'
import { capitalize } from 'lodash'
import ms from 'simple-modular-scale'

class Header extends React.Component {

  render () {
    let scale = ms({ length: 8 })
    let styles = {
      header: {
        paddingTop: scale[2],
        paddingBottom: scale[2],
      },
      h1: {
        margin: 0
      },
      p: {
        fontSize: 20,
        margin: 0
      }
    }
    return (
      <header style={styles.header}>
        <h1 style={styles.h1}>{capitalize(this.props.name)}</h1>
        <p style={styles.p}>
          {this.props.description}
        </p>
      </header>
    )
  }

}

export default Header

