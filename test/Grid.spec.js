
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Grid from '../src/Grid'
import Cell from '../src/Cell'

const renderer = TestUtils.createRenderer()

describe('Grid', () => {
  let grid

  describe('shallow tests', () => {
    beforeEach(() => {
      renderer.render(<Grid />)
      grid = renderer.getRenderOutput()
    })

    it('should render', () => {
      expect(grid.type).toEqual('div')
    })

    it('should have no default margin', () => {
      expect(grid.props.style.marginLeft).toEqual(0)
      expect(grid.props.style.marginRight).toEqual(0)
    })

    context('when gutter is set', () => {
      beforeEach(() => {
        renderer.render(<Grid gutter={16} />)
        grid = renderer.getRenderOutput()
      })

      it('should have negative left and right margins', () => {
        expect(grid.props.style.marginLeft).toEqual(-16)
        expect(grid.props.style.marginRight).toEqual(-16)
      })
    })

    context('with Cell children', () => {
      let c1, c2
      beforeEach(() => {
        renderer.render(
          <Grid>
            <Cell min={128} children='Cell min 128' />
            <Cell min={256} children='Cell min 256' />
          </Grid>
        )
        grid = renderer.getRenderOutput()
        c1 = grid.props.children[0]
        c2 = grid.props.children[1]
      })

      it('should render children Cells', () => {
        expect(grid.props.children.length).toEqual(2)
      })

      it('should set Cells’ inline prop', () => {
        expect(c1.props.inline).toEqual(true)
        expect(c2.props.inline).toEqual(true)
      })

      it('should set Cells’ widths as ratios of default width', () => {
        expect(c1.props.width).toEqual(256 / 768)
        expect(c2.props.width).toEqual(512 / 768)
      })
    })

    context('with gutter and Cell children', () => {
      let c1, c2
      beforeEach(() => {
        renderer.render(
          <Grid gutter={16}>
            <Cell min={128} children='Cell min 128' />
            <Cell min={256} children='Cell min 256' />
          </Grid>
        )
        grid = renderer.getRenderOutput()
        c1 = grid.props.children[0]
        c2 = grid.props.children[1]
      })

      it('should set negative left and right margins', () => {
        expect(grid.props.style.marginLeft).toEqual(-16)
        expect(grid.props.style.marginRight).toEqual(-16)
      })

      it('should render children Cells', () => {
        expect(grid.props.children.length).toEqual(2)
      })

      it('should set Cells’ inline prop', () => {
        expect(c1.props.inline).toEqual(true)
        expect(c2.props.inline).toEqual(true)
      })

      it('should set Cells’ widths as ratios of default width', () => {
        expect(c1.props.width).toEqual(256 / 768)
        expect(c2.props.width).toEqual(512 / 768)
      })

      it('should set Cells’ padding', () => {
        expect(c1.props.padding).toEqual(16)
        expect(c2.props.padding).toEqual(16)
      })
    })

    context('with gutter and Cell children with padding', () => {
      let c1, c2
      beforeEach(() => {
        renderer.render(
          <Grid gutter={16}>
            <Cell min={128} padding={32} children='Cell min 128' />
            <Cell min={256} children='Cell min 256' />
          </Grid>
        )
        grid = renderer.getRenderOutput()
        c1 = grid.props.children[0]
        c2 = grid.props.children[1]
      })

      it('should set negative left and right margins', () => {
        expect(grid.props.style.marginLeft).toEqual(-16)
        expect(grid.props.style.marginRight).toEqual(-16)
      })

      it('should render children Cells', () => {
        expect(grid.props.children.length).toEqual(2)
      })

      it('should set Cells’ inline prop', () => {
        expect(c1.props.inline).toEqual(true)
        expect(c2.props.inline).toEqual(true)
      })

      it('should set Cells’ widths as ratios of default width', () => {
        expect(c1.props.width).toEqual(256 / 768)
        expect(c2.props.width).toEqual(512 / 768)
      })

      it('should not set first Cell’s padding', () => {
        expect(c1.props.padding).toEqual(32)
      })

      it('should set second Cell’s padding', () => {
        expect(c2.props.padding).toEqual(16)
      })
    })
  })


  describe('browser tests', () => {
    if (typeof document === 'undefined') {
      return false
    }

    beforeEach(() => {
      const props = {
        gutter: 32
      }
      grid = TestUtils.renderIntoDocument(
        <Grid {...props}>
          <Cell min={128}>
            Cell 128
          </Cell>
          <Cell min={256}>
            Cell 256
          </Cell>
        </Grid>
      )
    })

    it('should render', () => {
      expect(grid).toExist()
    })

    it('should set props on children')

    it('should have negative margins for gutters')
  })

})

