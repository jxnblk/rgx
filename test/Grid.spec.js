
import React from 'react'
import ReactDOM from 'react-dom'
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

    let div = document.createElement('div'),
        c1,
        c2

    document.body.appendChild(div)

    context('at wider width', () => {
      beforeEach(() => {
        grid = ReactDOM.render(
          <Grid gutter={32}>
            <Cell min={192}>
              Cell 192
            </Cell>
            <Cell min={576}>
              Cell 576
            </Cell>
          </Grid>,
          div
        )
        const cells = TestUtils.scryRenderedComponentsWithType(grid, Cell)
        c1 = cells[0]
        c2 = cells[1]
      })

      afterEach(() => {
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should render', () => {
        expect(grid).toExist()
      })

      it('should have negative margins', () => {
        const el = grid.refs.root
        expect(el.style.marginLeft).toEqual('-32px')
        expect(el.style.marginRight).toEqual('-32px')
      })

      it('should render children', () => {
        expect(c1).toExist()
        expect(c2).toExist()
      })

      it('should set padding on children', () => {
        expect(c1.props.padding).toEqual(32)
        expect(c2.props.padding).toEqual(32)
      })

      it('should style padding on children', () => {
        expect(c1.refs.cell.style.paddingLeft).toEqual('32px')
        expect(c1.refs.cell.style.paddingRight).toEqual('32px')
        expect(c2.refs.cell.style.paddingLeft).toEqual('32px')
        expect(c2.refs.cell.style.paddingRight).toEqual('32px')
      })

      it('should set children inline', () => {
        expect(c1.props.inline).toEqual(true)
        expect(c2.props.inline).toEqual(true)
      })

      it('should set correct widths for children', () => {
        expect(c1.props.width).toEqual(192/768)
        expect(c2.props.width).toEqual(576/768)
      })

      it('should style widths on children', () => {
        expect(c1.refs.cell.style.width).toEqual('25%')
        expect(c2.refs.cell.style.width).toEqual('75%')
      })
    })

    context('when in a smaller width container', () => {
      beforeEach((done) => {
        div.style.width = '512px'
        grid = ReactDOM.render(
          <Grid gutter={32}>
            <Cell min={192}>
              Cell 192
            </Cell>
            <Cell min={576}>
              Cell 576
            </Cell>
          </Grid>,
          div
        )
        window.setTimeout(() => {
          const cells = TestUtils.scryRenderedComponentsWithType(grid, Cell)
          c1 = cells[0]
          c2 = cells[1]
          done()
        }, 100, this)
      })

      afterEach(() => {
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should set padding on children', () => {
        expect(c1.props.padding).toEqual(32)
        expect(c2.props.padding).toEqual(32)
      })

      it('should not set children inline', () => {
        expect(c1.props.inline).toEqual(false)
        expect(c2.props.inline).toEqual(false)
      })

      it('should style children at full-width', () => {
        expect(c1.refs.cell.style.width).toEqual('100%')
        expect(c2.refs.cell.style.width).toEqual('100%')
      })

      it('should have the Cells stacked', () => {
        const y1 = c1.refs.cell.getBoundingClientRect().top
        const y2 = c2.refs.cell.getBoundingClientRect().top
        expect(y1 < y2).toEqual(true)
      })
    })
  })
})

