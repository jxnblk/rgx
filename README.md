# Rgx

React grid system – constraint-based responsive grid with no CSS and no media queries.

## About

Rgx is an experimental, responsive grid system built purely in React with no CSS and no media queries.
Each Grid row sets its child Cells to display inline block once the Grid is wide enough to fit all Cells’ minimum widths.
Since this isn’t based on viewport-based media queries, the Grid responds to its own width, similar to element queries.
Once set inline, each Cell’s width is based on the ratio of its own minimum width to the sum of minimum widths per row.

## Getting Started

```bash
npm i rgx
```

```js
import React from 'react'
import { Grid, Cell } from 'rgx'

class Demo extends React.Component {
  render () {
    return (
      <Grid gutter={8}>
        <Cell min={256}>Min 256</Cell>
        <Cell min={768}>Min 768</Cell>
      </Grid>
    )
  }
}

React.render(<Demo />, document.querySelector('#demo'))
```

## Performance

I have yet to do any performance audits, and since the Grid component listens to window resize events,
this probably has huge performance issues. Any help in that area would be greatly appreciated.

MIT License

