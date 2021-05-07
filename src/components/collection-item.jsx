import React from "react";
import { BackgroundImage } from "../styles/BackgroundImage";
import styled, { keyframes } from "styled-components";
import CustomButton from "../components/custom-button"

const slideIn = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
`;

const CollectionItemWrapper = styled.div`
    position: relative;
    width: 35rem;
    display: flex;
    flex-direction: column;
    height: 50rem;
    cursor: pointer;
    overflow: hidden;

    &::after{
            content: "";
            position: absolute;
            z-index: 1;
            top: 0;
            right: -100%;
            width: 100%;
            height: 90%;
            background-color: black;
            opacity: 0;
            transform: translateX(-100%);
            transition: all .3s ease-in-out;
        }
    &:hover::after{
        opacity: .5;
        animation: ${slideIn} .3s ease-in-out both;
    }

    &:hover > button{
        opacity: .75;
    }
`;

const CollectionItemFotter = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    font-size: 3rem;

    & span{
       font-size: 2rem; 
    }
`;

const AddToBagBtn = styled(CustomButton)`
    position: absolute;
    bottom: 25rem;
    z-index: 2;
    opacity: 0;
    transition: opacity .4s ease-in-out;
`;

const CollectionItem = ({id, name, price, imageURL}) => {
    return (
        <CollectionItemWrapper>
            <BackgroundImage imageURL={imageURL} height="95%"/>
            <CollectionItemFotter>
                <span>{name}</span>
                <span>{price}</span>
            </CollectionItemFotter>
            <AddToBagBtn fontWeight={200} hoverInverseColor="white" color="black" backgroundColor="white">Add to bag</AddToBagBtn>
        </CollectionItemWrapper>
    )
}


export default CollectionItem;