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

var Cell = (function (_React$Component) {
  function Cell() {
    _classCallCheck(this, Cell);

    _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Cell, _React$Component);

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var style = {
        boxSizing: 'border-box',
        display: props.inline ? 'inline-block' : 'block',
        width: props.inline ? props.width * 100 + '%' : '100%',
        verticalAlign: 'top',
        paddingLeft: props.padding,
        paddingRight: props.padding,
        position: 'relative'
      };

      var abs = {
        fontSize: 12,
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: 'blue'
      };
      return _react2['default'].createElement(
        'div',
        { style: style },
        _react2['default'].createElement(
          'code',
          { style: abs },
          props.min,
          '/',
          props.max,
          (props.width * props.gridWidth).toFixed(1)
        ),
        this.props.children
      );
    }
  }]);

  return Cell;
})(_react2['default'].Component);

Cell.propTypes = {
  min: _react2['default'].PropTypes.number,
  max: _react2['default'].PropTypes.number,
  width: _react2['default'].PropTypes.number,
  padding: _react2['default'].PropTypes.number,
  inline: _react2['default'].PropTypes.bool
};

Cell.defaultProps = {
  min: 640,
  max: null,
  width: 100,
  padding: 0,
  inline: false
};

exports['default'] = Cell;
module.exports = exports['default'];