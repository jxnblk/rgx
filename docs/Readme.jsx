
import React from 'react'
import md from '../README.md'
import Section from './Section'

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
      <Section>
        <div dangerouslySetInnerHTML={html}
          style={style} />
      </Section>
    )
  }

}

export default Readme

