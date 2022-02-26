"use strict";

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const TextareaElement = _styledComponents.default.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 2.2px solid var(--border-color);\n    border-radius: 10px;\n    background: var(--primary);\n    color: var(--text);\n    font-size: 1em;\n    z-index:2;\n    font-family: 'Euclid Medium';\n    padding: 12px;\n    width: 100%;\n    resize:none;\n    transition: border-color .3s;\n    border-color:", ";\n    &:focus{\n        border-color:var(--brand);\n    }\n    &:disabled{\n        background: #f8f8f8;\n        border-color: #ededed;\n    }\n"])), props => props.error ? 'rgb(255 0 60)' : 'var(--border-color)');

class Textarea extends _react.Component {
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

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: this.props.className,
      children: [this.props.label ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: this.props.type,
        children: [this.props.label, ":"]
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(TextareaElement, {
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        error: this.state.errored,
        id: this.props.id || this.props.type,
        placeholder: this.props.placeholder,
        "data-name": this.props.id || this.props.type || null,
        value: this.state.value || '',
        disabled: this.props.disabled,
        style: this.props.styles,
        onChange: this.handleChange
      })]
    });
  }

}

Textarea.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  errored: _propTypes.default.bool,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  styles: _propTypes.default.object
};