"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingIcon;

function LoadingIcon(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.selfalign ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: props.styles,
    width: "38",
    height: "38",
    viewBox: "0 0 42 42",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg",
    transform: "translate(3 3)",
    strokeWidth: "5"
  }, /*#__PURE__*/React.createElement("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.5s",
    repeatCount: "indefinite"
  })))))) : /*#__PURE__*/React.createElement("svg", {
    style: props.styles,
    width: "38",
    height: "38",
    viewBox: "0 0 42 42",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg",
    transform: "translate(3 3)",
    strokeWidth: "5"
  }, /*#__PURE__*/React.createElement("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.5s",
    repeatCount: "indefinite"
  }))))));
}