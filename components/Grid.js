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
    this.getTotal = this.getTotal.bind(this);
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
    key: 'getTotal',
    value: function getTotal() {
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
        marginRight: -props.gutter
      };
      var total = this.getTotal();
      var children = _react2['default'].Children.map(this.props.children, function (c) {
        var childProps = {
          width: c.props.min / total,
          inline: total < state.width
        };
        if (!c.props.padding) {
          childProps.padding = props.gutter;
        }
        return _react2['default'].cloneElement(c, childProps);
      });
      return _react2['default'].createElement(
        'div',
        { style: style },
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