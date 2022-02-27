import styled from 'styled-components'
import LoadingIcon from './LoadingIcon'
import PropTypes from 'prop-types';
const ButtonElement = styled.button`
    border: none;
    background: ${props => props.negative ? 'rgb(255 67 113)' : 'var(--brand)'};
    border-radius:8px;
    width:fit-content;
    padding: 10px 12px;
    font-size: 0.9em;
    height:fit-content;
    margin-top: 12px;
    transition:transform .5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    &[disabled]{
        pointer-events: none;
        background:#9f9f9f;
    }
    & > p{
        display:${props => props.loading ? 'none' : 'block'};
        font-family: 'Euclid Medium';
        font-weight:100;
        color: white;
        user-select:none;
    }
    & > div{
        display:${props => props.loading ? 'block' : 'none'};
        align-items: center;
        justify-content: center;
        width: 120px;
    }
    & > div svg{
        width:19.2px;
        height:19.2px;
    }
    &:focus{
        transform: scale(0.95);
    }
`
function Button(props){
return(
    <ButtonElement style={props.styles} onClick={props.onClick || props.action} negative={props.negative} loading={props.loading} disabled={props.loading || props.disabled}><p>{props.children || props.text}</p><div><LoadingIcon color="#ffffff"/></div></ButtonElement>
)
}

Button.propTypes = {
    styles: PropTypes.object,
    onClick: PropTypes.func,
    action: PropTypes.func,
    negative: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    text: (props, propName, componentName) => {
        if (!props.text && !props.children) {
          return new Error(`One of props 'text' or 'children' was not specified in '${componentName}'.`)
        }
        if (props.text) {
          PropTypes.checkPropTypes({
            text: PropTypes.string,
          },
          { text: props.text },
          propName,
          componentName)
        }
        return null
      },
    children: (props, propName, componentName) => {
        if (!props.text && !props.children) {
          return new Error(`One of props 'text' or 'children' was not specified in '${componentName}'.`)
        }
        if (props.children) {
          PropTypes.checkPropTypes({
            children: PropTypes.string,
          },
          { children: props.children },
          propName,
          componentName)
        }
        return null
      }
}

export default Button;