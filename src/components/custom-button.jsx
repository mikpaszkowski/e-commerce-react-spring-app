import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
    position: relative;
    width: 100%;
    height: 6rem;
    margin-top: 5rem;
    background-color: ${({theme}) => theme.btnDefaultColor};
    color: ${({theme}) => theme.primaryColor};
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: .2rem;
    cursor: pointer;
    border: none;

    &:hover{
        background-color: ${props => props.color ? props.color : props.theme.hoverDeafultBtnColor};
    }
`;


const CustomButton = ({children, ...props}) => (
    <FormButton {...props}>
        {children}
    </FormButton>
);


export default CustomButton;