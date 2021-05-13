import React from "react";
import styled from "styled-components";


const CartCheckoutWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0;
    height: 27rem;

    & > div{
        width: 20rem;
        text-align: center;
    }
    & > select {
        width: 10rem;
        height: 
        margin-left: 3rem;
    }
`;

const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;


const ItemDescription = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;

    & span {
      display: block;
      font-weight: 400;
      color: gray;
      margin-top: 1rem;
      font-size: 2.5rem;
    }
`;

const Quantity = styled.div`
    display: block;
    font-weight: 400;
    font-size: 2.5rem;
`;

const Price = styled.div`
    display: block;
    text-align: right;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
`;

const SelectQuantity = styled.select`

`;

const CartCheckoutItem = ({ item }) => {
    const { imageURL, id, name, price, quantity } = item;
    return (
        <CartCheckoutWrapper>
            <Image src={imageURL}/>
            <ItemDescription>
                {name}
                <span>Size: M</span>
            </ItemDescription>
            <Quantity>
                {
                (quantity > 1) ? quantity : null
                }
            </Quantity>
            <Price>{price} USD</Price>
             <SelectQuantity>
                
            </SelectQuantity>
        </CartCheckoutWrapper>
    );       
};

export default CartCheckoutItem;