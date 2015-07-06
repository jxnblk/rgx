'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var win = typeof window !== 'undefined' ? window : false;

var Grid = (function (_React$Component) {
  function Grid() {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.getMinTotal = this.getMinTotal.bind(this);
    this.getMaxTotal = this.getMaxTotal.bind(this);
    this.state = {
      width: 768
    };
  }

  _inherits(Grid, _React$Component);

  _createClass(Grid, [{
    key: 'updateWidth',
    value: function updateWidth() {
      var el = _react2['default'].findDOMNode(this);
      var width = el.offsetWidth;
      this.setState({ width: width });
    }
  }, {
    key: 'getMinTotal',
    value: function getMinTotal() {
      var total = 0;
      var props = this.props;
      _react2['default'].Children.map(this.props.children, function (c, i) {
        var min = c.props.min || false;
        if (!min) {
          min = props.min;
        }
        total += min;
      });
      return total;
    }
  }, {
    key: 'getMaxTotal',
    value: function getMaxTotal() {
      var tmin = this.getMinTotal();
      var total = 0;
      var props = this.props;
      var state = this.state;
      _react2['default'].Children.map(this.props.children, function (c, i) {
        var max = 0;
        if (c.props.max && c.props.min / tmin * state.width > c.props.max) {
          max = c.props.max;
        }
        total += max;
      });
      return total;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWidth();
      if (win) {
        win.addEventListener('resize', this.updateWidth);
      }
    }
  }, {
    key: 'componentDidUnmount',
    value: function componentDidUnmount() {
      if (win) {
        win.removeEventListener('resize', this.updateWidth);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var state = this.state;
      var style = {
        overflow: 'hidden',
        marginLeft: -props.gutter,
        marginRight: -props.gutter,

        position: 'relative'
      };
      var tmin = this.getMinTotal();
      var tmax = this.getMaxTotal();
      var offset = 0;
      var toff = 0;
      var nmax = 0;

      _react2['default'].Children.map(this.props.children, function (c) {
        if (c.props.max && c.props.min / tmin * state.width > c.props.max) {
          nmax++;
          var max = c.props.max;
          var min = c.props.min;
          var w = state.width;

          // Works for situations with just one max Cell
          //offset -= (((tmin - min) / (1 - max / w)) - tmin + offset)
          //offset += ((tmin - min) / (1 - (max / w) - ((tmax - max) / w))) - tmin

          //offset -= ( ((tmin - min) / (1 - (max / w) + ((tmax - max) / w))) - tmin)

          // Test
          //let test = (max/w) + ((tmin - min) / (tmin - offset))
          var maxes = max / w + (tmax - max) / w;
          var leftover = 1 - maxes;
          //console.log('TEST', offset.toFixed(2), test.toFixed(2), Math.round(test * 10000) / 10000 === 1)
          console.log('MAXES', maxes.toFixed(2));
          console.log('LEFTOVER', leftover.toFixed(2));
          toff += min;
          offset += max / w;
        }
      });

      var children = _react2['default'].Children.map(this.props.children, function (c) {
        var width = c.props.min / (tmin - toff) - offset / (props.children.length - nmax);
        console.log('width', width);
        if (c.props.max && c.props.min / tmin * state.width > c.props.max) {
          width = c.props.max / state.width;
        }
        var childProps = {
          width: width,
          gridWidth: state.width,
          tmin: tmin - offset,
          inline: tmin < state.width
        };
        if (!c.props.padding) {
          childProps.padding = props.gutter;
        }
        return _react2['default'].cloneElement(c, childProps);
      });

      var abs = {
        fontSize: 12,
        position: 'absolute',
        right: 0,
        color: 'red'
      };
      return _react2['default'].createElement(
        'div',
        { style: style },
        _react2['default'].createElement(
          'code',
          { style: abs },
          state.width
        ),
        children
      );
    }
  }]);

  return Grid;
})(_react2['default'].Component);

Grid.propTypes = {
  min: _react2['default'].PropTypes.number,
  gutter: _react2['default'].PropTypes.number
};

Grid.defaultProps = {
  min: 640,
  gutter: 0
};

exports['default'] = Grid;
module.exports = exports['default'];

//this.updateWidth()