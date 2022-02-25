import {Component} from 'react'
import styled from 'styled-components';
const InputElement = styled.input`
    border: 2.2px solid var(--border-color);
    border-radius: 10px;
    background: var(--primary);
    color: var(--text);
    font-size: 1em;
    z-index:2;
    font-family: 'Euclid Medium';
    padding: 12px;
    width: 100%;
    transition: border-color .3s;
    border-color:${props => props.error ? 'rgb(255 0 60)' : 'var(--border-color)'};
    &:focus{
        border-color:#33d190;
    }
    &:disabled{
        background: #f8f8f8;
        border-color: #ededed;
    }
`
export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {value:this.props.content,initiate:this.props.content,errored:false}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        if((this.props.maxLength && event.target.value.length <= this.props.maxLength) || !this.props.maxLength){
        this.setState({value:event.target.value},()=>{
        if(this.props.callback){
            this.props.callback(this)
        }
        })
    }
    }
    render(){
        if(this.props.content !== this.state.initiate){
            this.setState({value:this.props.content,initiate:this.props.content})
        }
        
    return(
        <div className={this.props.className}>
        {this.props.label ? <label htmlFor={this.props.type}>{this.props.label}:</label> : null}
        <InputElement onBlur={this.props.onBlur} onFocus={this.props.onFocus} type={this.props.type === 'password' ? 'password' : 'text'} error={this.state.errored ? true : false} id={this.props.type} placeholder={this.props.placeholder} data-name={this.props.type} value={this.state.value || ''} disabled={this.props.disabled} style={this.props.styles} onChange={this.handleChange}/>
        </div>
    )
}}