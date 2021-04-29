import React from "react";
import { BackgroundImage } from "../styles/BackgroundImage";
import styled from "styled-components";

const CollectionItemWrapper = styled.div`
    position: relative;
    width: 35rem;
    display: flex;
    flex-direction: column;
    height: 50rem;
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

const CollectionItem = ({id, name, price, imageURL}) => {
    return (
        <CollectionItemWrapper>
            <BackgroundImage imageURL={imageURL} height="95%"/>
            <CollectionItemFotter>
                <span>{name}</span>
                <span>{price}</span>
            </CollectionItemFotter>
        </CollectionItemWrapper>
    )
}


export default CollectionItem;