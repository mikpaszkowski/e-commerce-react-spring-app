import React from "react";
import CustomButton from "./custom-button";
import CartItem from "./cart-dropdown-item";
import styled from "styled-components";

const CartWrapper = styled.div`
    position: absolute;
    width: 60rem;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: white;
    top: 12rem;
    right: 0;
    z-index: 10;
`;

const ShoppingInfoContainer = styled.div`

`;

const DeliveryInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & span{
        margin: 3rem 0;
        text-transform: uppercase;
        font-size: 2rem;
    }
`;

const TotalPriceInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & span {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.5rem;

        & span{
            display: block;
            font-weight: 200;
            font-size: 2rem;
        }
    }
`;


const Cart = () => {

    return(
        <CartWrapper>
            <CartItem/>
            <ShoppingInfoContainer>
                <DeliveryInfo>
                    <span>delivery</span>
                    <span>From 0.00 USD</span>
                </DeliveryInfo>
                <TotalPriceInfo>
                    <span>
                        total price 
                    <span>including vat</span>
                    </span>
                    <span>32.92 USD</span>
                </TotalPriceInfo>
                <CustomButton>See cart</CustomButton>
            </ShoppingInfoContainer>
        </CartWrapper>
    );
};


export default Cart;