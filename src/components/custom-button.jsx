import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
    position: relative;
    width: 100%;
    height: 6rem;
    margin-top: 5rem;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : props.theme.btnDefaultColor};
    color: ${(props) => props.color ? props.color : props.theme.primaryColor};
    font-size: 2rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 600};
    letter-spacing: .2rem;
    cursor: pointer;
    border: none;
    transition: all .3s ease-in-out;

    &:hover{
        color: ${props => props.hoverInverseColor ? props.hoverInverseColor : props.color};
        background-color: ${props => props.color ? props.color : props.theme.hoverDeafultBtnColor};
    }
`;


const CustomButton = ({children, ...props}) => (
    <FormButton {...props}>
        {children}
    </FormButton>
);


export default CustomButton;