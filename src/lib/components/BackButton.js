import styled from 'styled-components'
const BackButtonElement = styled.button`
    border: none;
    background: var(--brand);
    border-radius: 8px;
    width: fit-content;
    font-family:'Euclid Medium';
    padding: 8px 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    margin-top: 7px;
    transition: background .3s;
 margin-right:10px;
& p{
    color:#fff;
    margin-left:4px;
}
&:before{
    content: '';
    border: solid white;
    width:0px;
    margin-top:-3px;
    padding:3px;
    border-width:0 2.5px 2.5px 0;
    height:0px;
    display: inline-block;
    transform: rotate(
135deg
) translate(0px,-3px);
}
`
export default function Button(props){
return(
    <BackButtonElement style={props.styles} onClick={props.action}><p>Назад</p></BackButtonElement>
) 
}