import React from "react";
import styled from "styled-components";

const CartItemWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: .2rem 0;
    border-bottom: 1px solid grey;
`;

const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;

const ItemName = styled.div`
    margin-left: 2rem;
    margin-right: 8rem;

  & span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;

    & span {
      display: block;
      font-weight: 400;
      color: gray;
      font-size: 2rem;
    }
  }
`;

const Price = styled.div`
display: grid;
    span{
        align-self: end;
        text-align: right;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.5rem;
    }
`;

const CartItem = ({ item }) => {
  const { imageURL, name, price, quantity } = item;
  return (
    <CartItemWrapper>
      <Image width="13rem" src={imageURL} />
      <ItemName>
      <span>
        {name}
        <span>Size: M</span>
        {
          (quantity > 1) ? <span>Quantity: {quantity}</span> : null
        }
      </span>
      </ItemName>
      <Price>
      <span>{price} USD</span>
      </Price>
    </CartItemWrapper>
  );
};

export default CartItem;
