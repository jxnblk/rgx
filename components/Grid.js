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

var _lodash = require('lodash');

var win = typeof window !== 'undefined' ? window : false;

var Grid = (function (_React$Component) {
  function Grid() {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.getMinTotal = this.getMinTotal.bind(this);
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
      var _props = this.props;
      var children = _props.children;
      var min = _props.min;

      _react2['default'].Children.map(children, function (child, i) {
        var childMin = child.props.min || false;
        if (!childMin) {
          childMin = min;
        }
        total += childMin;
      });
      return total;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWidth();
      if (win) {
        this.startListeningForResize();
      }
    }
  }, {
    key: 'componentDidUnmount',
    value: function componentDidUnmount() {
      if (win) {
        this.stopListeningForResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (win && prevProps.throttleResize !== this.props.throttleResize) {
        this.stopListeningForResize();
        this.startListeningForResize();
      }
    }
  }, {
    key: 'startListeningForResize',
    value: function startListeningForResize() {
      this.throttledUpdateWidth = (0, _lodash.throttle)(this.updateWidth, this.props.throttleResize);
      win.addEventListener('resize', this.throttledUpdateWidth);
    }
  }, {
    key: 'stopListeningForResize',
    value: function stopListeningForResize() {
      win.removeEventListener('resize', this.throttledUpdateWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var gutter = _props2.gutter;
      var width = this.state.width;

      var style = {
        overflow: 'hidden',
        marginLeft: -gutter,
        marginRight: -gutter,
        position: 'relative'
      };

      // min width denominator
      var dmin = this.getMinTotal();
      // min values of max cells
      var maxmins = [];
      // max values of max cells
      var maxes = [];

      _react2['default'].Children.map(children, function (child) {
        if (child.props.max && child.props.min / dmin * width > child.props.max) {
          maxes.push(child.props.max);
          maxmins.push(child.props.min);
        }
      });

      // sum of max cell values
      var maxSum = maxes.length ? maxes.reduce(function (a, b) {
        return a + b;
      }) : 0;
      // sum of min values for max cells
      var maxminSum = maxmins.length ? maxmins.reduce(function (a, b) {
        return a + b;
      }) : 0;
      // percent offset from remaining min cell widths
      var offset = maxSum / width / (children.length - maxes.length);
      var denominator = dmin - maxminSum;

      // set child props
      var modifiedChildren = _react2['default'].Children.map(children, function (child) {
        var childWidth = child.props.min / denominator - offset;
        if (child.props.max && child.props.min / dmin * width > child.props.max) {
          childWidth = child.props.max / width;
        }
        var childProps = {
          width: childWidth,
          inline: dmin < width
        };
        if (!child.props.padding) {
          childProps.padding = gutter;
        }
        return _react2['default'].cloneElement(child, childProps);
      });

      return _react2['default'].createElement(
        'div',
        { style: style },
        modifiedChildren
      );
    }
  }]);

  return Grid;
})(_react2['default'].Component);

Grid.propTypes = {
  min: _react2['default'].PropTypes.number,
  gutter: _react2['default'].PropTypes.number,
  throttleResize: _react2['default'].PropTypes.number
};

Grid.defaultProps = {
  min: 640,
  gutter: 0,
  throttleResize: 200
};

exports['default'] = Grid;
module.exports = exports['default'];