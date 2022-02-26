"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ButtonElement = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    background: ", ";\n    border-radius:8px;\n    width:fit-content;\n    padding: 10px 12px;\n    font-size: 0.9em;\n    height:fit-content;\n    margin-top: 12px;\n    transition:transform .5s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n    &[disabled]{\n        pointer-events: none;\n        background:#9f9f9f;\n    }\n    & > p{\n        display:", ";\n        font-family: 'Euclid Medium';\n        font-weight:100;\n        color: white;\n        user-select:none;\n    }\n    & > div{\n        display:", ";\n        align-items: center;\n        justify-content: center;\n        width: 120px;\n    }\n    & > div svg{\n        width:19.2px;\n        height:19.2px;\n    }\n    &:focus{\n        transform: scale(0.95);\n    }\n"])), props => props.negative ? 'rgb(255 67 113)' : 'var(--brand)', props => props.loading ? 'none' : 'block', props => props.loading ? 'block' : 'none');

function Button(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonElement, {
    style: props.styles,
    onClick: props.onClick || props.action,
    negative: props.negative,
    loading: props.loading,
    disabled: props.loading || props.disabled,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: props.children || props.text
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingIcon.default, {
        color: "#ffffff"
      })
    })]
  });
}

Button.propTypes = {
  styles: _propTypes.default.object,
  onClick: _propTypes.default.func,
  action: _propTypes.default.func,
  negative: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  text: _propTypes.default.string
};
var _default = Button;
exports.default = _default;