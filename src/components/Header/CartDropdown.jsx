import React, { useEffect, useRef } from "react";
import CustomButton from "../CustomButton";
import CartItem from "./CartDropdownItem";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../stores/cart/cartActions";
import { selectCartHidden, selectCartItems, selectCartTotalPrice } from "../../stores/cart/cartSelectors"
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

const CartWrapper = styled.div`
    position: absolute;
    width: 60rem;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: white;
    border: 1px solid ${props => props.theme.secondaryColor};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;;
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

const ListItemsWrapper = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    max-height: 40rem;
`;

const EmptyMessageHeadline = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
`;


const Cart = ({ cartItems, hidden, toggleCartVisibility, totalPrice, history}) => {

    const node = useRef();

    const handleClick = e => {
        if(node.current == null) return;
        if(node.current.contains(e.target)){
            return;
        }
        toggleCartVisibility();
    }
    useEffect(() => {
        if(!hidden){
            document.addEventListener('click', handleClick);
        }else{
            document.removeEventListener('click', handleClick);
        }

        return () =>{
            document.removeEventListener('click', handleClick);
        }
    });

    const redirectToCheckout = () => {
        toggleCartVisibility();
        history.push("/checkout")
    }

    return(
        <CartWrapper ref={node}>
            <ListItemsWrapper>
            {
                (cartItems.length === 0) ? null : cartItems.map(item => (
                    <CartItem key={item.id} item={item} imageWidth="13rem"/>
                ))
            }
            </ListItemsWrapper>
            {
                cartItems.length ? 
                <ShoppingInfoContainer>
                <DeliveryInfo>
                    <span>delivery</span>
                    <span>From 100.00 USD</span>
                </DeliveryInfo>
                <TotalPriceInfo>
                    <span>
                        total price 
                    <span>including vat</span>
                    </span>
                    <span>{totalPrice} USD</span>
                </TotalPriceInfo>
                <CustomButton onClick={redirectToCheckout}>See cart</CustomButton>
            </ShoppingInfoContainer>
            : <EmptyMessageHeadline>Your cart is empty</EmptyMessageHeadline>
            }
        </CartWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));