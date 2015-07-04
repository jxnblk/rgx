
import React from 'react'
import { Range, Pad } from 'rebass'

class Controls extends React.Component {

  render () {
    let props = this.props
    return (
      <div>
        <Range
          label='Gutter'
          name='gutter'
          max={64}
          value={props.gutter}
          onChange={props.onChange} />
      </div>
    )
  }

}

export default Controls

