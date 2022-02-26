"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const BackButtonElement = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    background: var(--brand);\n    border-radius: 8px;\n    width: fit-content;\n    font-family:'Euclid Medium';\n    padding: 8px 10px;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.9em;\n    margin-top: 7px;\n    transition: background .3s;\n    margin-right:10px;\n& p{\n    color:#fff;\n    margin-left:4px;\n}\n&:before{\n    content: '';\n    border: solid white;\n    width:0px;\n    margin-top:-3px;\n    padding:3px;\n    border-width:0 2.5px 2.5px 0;\n    height:0px;\n    display: inline-block;\n    transform: rotate(\n135deg\n) translate(0px,-3px);\n}\n"])));

function Button(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BackButtonElement, {
    style: props.styles,
    onClick: props.onClick || props.action,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: {
        display: props.notext ? 'none' : 'block'
      },
      children: "\u041D\u0430\u0437\u0430\u0434"
    })
  });
}

Button.propTypes = {
  styles: _propTypes.default.object,
  action: _propTypes.default.func,
  onClick: _propTypes.default.func,
  notext: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;