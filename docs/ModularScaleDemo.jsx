
import React from 'react'
import ms from 'simple-modular-scale'
import GridDemo from './GridDemo.jsx'
import Section from './Section.jsx'
import Scale from './Scale.jsx'

class ModularScaleDemo extends React.Component {

  render () {
    let props = this.props
    let scale = ms({
      base: props.base,
      factors: [3/2, 4/3],
      length: 12 
    })

    let g1 = []
    for (var i = scale.length - 1; i > -1; i--) {
      let l = scale.length - i
      let cells = []
      let min = scale[i]
      for (var j = 0; j < l; j++) {
        cells.push({ min: min })
      }
      g1.push({ cells: cells })
    }

    return (
      <Section>
        <h4>
          <Scale scale={scale} />
        </h4>
        {g1.map(function(grid, i) {
          return (
            <GridDemo key={i}
              gutter={props.base}
              grid={grid} />
            )
        })}
      </Section>
    )
  }

}

export default ModularScaleDemo

