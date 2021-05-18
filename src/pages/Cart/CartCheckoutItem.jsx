import React from "react";
import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md"
import { removeItem, addItem, decreaseNumOfItem } from "../../stores/cart/cartActions";
import { connect } from "react-redux";


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

    & > span{
         display: flex;
         justify-content: center;
        font-size: 3rem;
       
        & > div{
            cursor: pointer;
            font-size: 3rem;
            margin: 0 2rem;
        }
    }
`;

const Price = styled.div`
    display: block;
    text-align: right;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
`;

const RemoveIcon = styled(MdRemoveShoppingCart)`
    cursor: pointer;
    width: 10rem;
    font-size: 4rem;

    &:hover{
        color:#e74c3c;
    }
`;

const CartCheckoutItem = ({ item, removeItemFromCart, addItem, decreaseNumOfItem }) => {
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
                (quantity > 0) ? (
                   <span>
                    <div onClick={() => decreaseNumOfItem(item)}>&#10094;</div>
                    {quantity}
                    <div onClick={() => addItem(item)}>&#10095;</div>
                   </span>
                ) : null
                }
            </Quantity>
            <Price>{price} USD</Price>
             <RemoveIcon onClick={() => removeItemFromCart(item)}/>
        </CartCheckoutWrapper>
    );       
};

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseNumOfItem: item => dispatch(decreaseNumOfItem(item))
})

export default connect(null, mapDispatchToProps)(CartCheckoutItem);