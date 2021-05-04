import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    position: relative;
    margin: 5rem 0;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 1rem 1rem 1rem .5rem;
    font-size: 2.5rem;
    font-weight: lighter;
    outline: none;
    border: none;
    border-bottom-color: ${props => props.theme.inputBorderColor};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    transition: border-color .1s ease-in;
    background-color: ${props => props.transparent ? "transparent" : null};

    &:hover,
    &:focus{
        border-color: darkgray;
    }

    &:focus + label{
        font-size: 1.5rem;
        color: black;
        top: -1rem;
        border-color: darkgray;
        font-weight: 100;
    }
`;

const Label = styled.label`
    position: absolute;
    margin-left: .5rem;
    font-size: 2rem;
    font-weight: 500;
    transition: all .2s ease-in-out;
    cursor: text;

    ${props => {
        if(props.active){
            return`
            font-size: 1.5rem;
            color: black;
            top: -1rem;
            border-color: darkgray;
            font-weight: 100;
            `
        }else{
            return `
                left: 0;
                top: 1rem;
                color: ${props => props.theme.secondaryFontColor};
            `
        }
    }}
`;

const InputForm = ({handleChange, label, ...props}) => (
<InputWrapper>
    <Input onChange={handleChange} {...props}/>
    {
        console.log(props.value),
        label ? (<Label active={props.value.length}>{label}</Label>) : null
    }
</InputWrapper>
);



export default InputForm;