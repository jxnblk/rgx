
import React from 'react'
import Section from './Section.jsx'

class Intro extends React.Component {

  render () {
    return (
      <Section>
        <p className='h3'>
          Rgx is an experimental, responsive grid system based on <b>minimum and maximum widths</b> and designed for content-out layout.
          Rgx is built purely in React and uses inline styles, with no CSS and no media queries.
          Each Grid row sets its child Cells to display inline block once the Grid is wide enough to fit all Cells’ minimum widths.
          Once set inline, each Cell’s width is based on the ratio of its own minimum width to the sum of minimum widths per row.
          Once a Cell hits its max-width, the remaining space is distributed to other Cells in the row.
          Since this isn’t based on viewport-based media queries, the Grid responds to its own width, similar to element queries.
        </p>
      </Section>
    )
  }

}

export default Intro

