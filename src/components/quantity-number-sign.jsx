import React from "react";
import styled from "styled-components";

const QuantityWrapper = styled.div`
    position: absolute;
    display: inline-block;
    top: -1rem;
    right: -1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding-top: .3rem;
    background-color: #e74c3c;
    color: white;
    text-align: center;

    & span{
        display: inline-block;
        vertical-align: middle;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

const QuantityNumber = ({number}) => {

    return (
        <QuantityWrapper>
            <span>{number}</span>
        </QuantityWrapper>
    )
};

export default QuantityNumber;