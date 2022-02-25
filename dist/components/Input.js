"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const InputElement = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 2.2px solid var(--border-color);\n    border-radius: 10px;\n    background: var(--primary);\n    color: var(--text);\n    font-size: 1em;\n    z-index:2;\n    font-family: 'Euclid Medium';\n    padding: 12px;\n    width: 100%;\n    transition: border-color .3s;\n    border-color:", ";\n    &:focus{\n        border-color:#33d190;\n    }\n    &:disabled{\n        background: #f8f8f8;\n        border-color: #ededed;\n    }\n"])), props => props.error ? 'rgb(255 0 60)' : 'var(--border-color)');

class Input extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.content,
      initiate: this.props.content,
      errored: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.maxLength && event.target.value.length <= this.props.maxLength || !this.props.maxLength) {
      this.setState({
        value: event.target.value
      }, () => {
        if (this.props.callback) {
          this.props.callback(this);
        }
      });
    }
  }

  render() {
    if (this.props.content !== this.state.initiate) {
      this.setState({
        value: this.props.content,
        initiate: this.props.content
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: this.props.className
    }, this.props.label ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.type
    }, this.props.label, ":") : null, /*#__PURE__*/React.createElement(InputElement, {
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      type: this.props.type === 'password' ? 'password' : 'text',
      error: this.state.errored ? true : false,
      id: this.props.type,
      placeholder: this.props.placeholder,
      "data-name": this.props.type,
      value: this.state.value || '',
      disabled: this.props.disabled,
      style: this.props.styles,
      onChange: this.handleChange
    }));
  }

}

exports.default = Input;