import React from "react";
import styled from "styled-components";

const CheckoutEmptyWrapper = styled.div`
    margin-top: 20rem;
    padding: 0 5rem;
    text-align: center;

    & h1 {
        font-size: 5rem;
    }

    & span{
        font-size: 3rem;
    }

    & > div{
        cursor: pointer;
        border: 1px solid ${props => props.theme.secondaryColor};
        width: 40rem;
        height: 5.5rem;
        margin: 0 auto;
        font-size: 3rem;
        text-transform: uppercase;

        &:hover{
            background-color: ${props => props.theme.secondaryColor}
        }
    }
`;


const CheckoutEmpty = () => {
  return (
    <CheckoutEmptyWrapper>
      <h1>Your cart is empty</h1>
      <span>
        If you have added products to your cart during previous visit, try
        logging into your account.
      </span>
      <span>or continue</span>
      <div>women</div>
      <div>men</div>
      <div>kids</div>
    </CheckoutEmptyWrapper>
  );
};

export default CheckoutEmpty;
