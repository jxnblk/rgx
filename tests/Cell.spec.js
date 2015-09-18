
import React from 'react/addons'
import expect from 'expect'
import Cell from '../src/Cell'

const { TestUtils } = React.addons

describe('Cell', () => {

  let cell

  beforeEach(() => {
    cell = TestUtils.renderIntoDocument(<Cell />)
  })

  it('should render', () => {
    expect(cell).toExist()
  })

  it('should be properly styled', () => {
    const style = cell.refs.cell.getDOMNode().style
    expect(style.boxSizing).toEqual('border-box')
  })

})

