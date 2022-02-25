import styled from 'styled-components'
import LoadingIcon from './LoadingIcon'
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
export default function Button(props){
return(
    <ButtonElement style={props.styles} onClick={props.action} negative={props.negative} loading={props.loading} disabled={props.disabled}><p>{props.children || props.text}</p><div><LoadingIcon color="#ffffff"/></div></ButtonElement>
)
}