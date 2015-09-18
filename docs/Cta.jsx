
import React from 'react'
import Section from './Section'

class Cta extends React.Component {

  render () {
    return (
      <Section>
        <h2>Get Started</h2>
        <pre>npm i rgx</pre>
        <p>
          Read the docs on GitHub to learn more.
        </p>
        <a href='//github.com/jxnblk/rgx'
          className='btn white bg-blue rounded'>
          GitHub
        </a>
      </Section>
    )
  }

}

export default Cta

