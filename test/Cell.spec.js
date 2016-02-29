
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Cell from '../src/Cell'

const renderer = TestUtils.createRenderer()

describe('Cell', () => {
  let cell

  describe('shallow tests', () => {
    beforeEach(() => {
      renderer.render(<Cell />)
      cell = renderer.getRenderOutput()
    })

    it('should render', () => {
      expect(cell.type).toEqual('div')
    })

    it('should default to 100% width', () => {
      expect(cell.props.style.width).toEqual('100%')
    })

    it('should have no default padding', () => {
      expect(cell.props.style.paddingLeft).toEqual(0)
      expect(cell.props.style.paddingRight).toEqual(0)
    })

    it('should not be inline by default', () => {
      expect(cell.props.inline).toNotExist()
    })

    it('should not have a default max', () => {
      expect(cell.props.max).toNotExist()
    })
  })

  describe('browser tests', () => {
    if (typeof document === 'undefined') {
      return false
    }

    beforeEach(() => {
      cell = TestUtils.renderIntoDocument(
        <Cell padding={16}>
          Cell
        </Cell>
      )
    })

    it('should render', () => {
      expect(cell).toExist()
    })

    it('should be properly styled', () => {
      const style = cell.refs.cell.getDOMNode().style
      expect(style.boxSizing).toEqual('border-box')
      expect(style.position).toEqual('relative')
      expect(style.paddingLeft).toEqual('16px')
    })
  })

})

