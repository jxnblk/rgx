
import React from 'react'
import md from '../README.md'

class Readme extends React.Component {

  render () {
    let html = {
      __html: md
    }
    let style = {
      lineHeight: 1.625,
      maxWidth: '40em',
    }
    return (
      <div dangerouslySetInnerHTML={html}
        style={style} />
    )
  }

}

export default Readme

