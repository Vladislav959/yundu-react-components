"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadingIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: props.selfalign ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
        style: props.styles,
        width: "38",
        height: "38",
        viewBox: "0 0 42 42",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
            xmlns: "http://www.w3.org/2000/svg",
            transform: "translate(3 3)",
            strokeWidth: "5",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              strokeOpacity: ".5",
              cx: "18",
              cy: "18",
              r: "18"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M36 18c0-9.94-8.06-18-18-18",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 18 18",
                to: "360 18 18",
                dur: "0.5s",
                repeatCount: "indefinite"
              })
            })]
          })
        })
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      style: props.styles,
      width: "38",
      height: "38",
      viewBox: "0 0 42 42",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: props.color,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        fill: "none",
        fillRule: "evenodd",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
          xmlns: "http://www.w3.org/2000/svg",
          transform: "translate(3 3)",
          strokeWidth: "5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
            strokeOpacity: ".5",
            cx: "18",
            cy: "18",
            r: "18"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M36 18c0-9.94-8.06-18-18-18",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.5s",
              repeatCount: "indefinite"
            })
          })]
        })
      })
    })
  });
}

LoadingIcon.propTypes = {
  selfalign: _propTypes.default.bool,
  styles: _propTypes.default.object,
  color: _propTypes.default.string
};
var _default = LoadingIcon;
exports.default = _default;