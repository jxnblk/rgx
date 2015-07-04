
import React from 'react'
import ms from 'simple-modular-scale'

class Section extends React.Component {

  render () {
    let scale = ms()
    let style = {
      paddingTop: scale[3],
      paddingBottom: scale[3],
    }
    return (
      <section style={style}>
        {this.props.children}
      </section>
    )
  }

}

export default Section

