import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectCartItems, selectCartItemsCount } from "../../stores/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import CartCheckoutItem from "./CartCheckoutItem";

const CheckoutWrapper = styled.div`
    width: 100%;
    margin-top: 10rem;
    padding: 5rem;
`;

const CartHeadlineWrapper = styled.div`
    display: inline-block;
`;

const CartHeadline = styled.h1`
    font-size: 5rem;
    width: 25rem;

    & span{
        font-size: 3rem;
        font-weight: 400;
        margin-left: 3rem;
    }
`;

const CartItemsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    
    & div {
        font-size: 3rem;
    }
`;

const CartCheckout = ({ cartItems, numberOfItems }) =>{
    return(
        <CheckoutWrapper>
            <CartHeadlineWrapper>
                <CartHeadline>
                    Cart
                <span>{numberOfItems} QTY</span>
                </CartHeadline>
            </CartHeadlineWrapper>
            <CartItemsHeader>
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </CartItemsHeader>
            {
                (cartItems.length === 0) ? null : cartItems.map(item => (
                    <CartCheckoutItem key={item.id} item={item} />
                ))
            }
        </CheckoutWrapper>
    )   
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    numberOfItems: selectCartItemsCount
});


export default connect(mapStateToProps)(CartCheckout);