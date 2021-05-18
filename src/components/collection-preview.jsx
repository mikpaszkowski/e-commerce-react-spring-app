import React from "react";
import CollectionItem from "./collection-item";
import styled from "styled-components";
import { Title } from "../styles/Title";

const CollectionPreviewWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
    padding: 0 4rem;
`;

const CollectionItemMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

`;

const CollectionPreview = ({title, items, numOfItems}) => (
    <CollectionPreviewWrapper>
        <Title>{title.toUpperCase()}</Title>
        <CollectionItemMainWrapper >
            {
                items.filter((item, index) => {
                    if(numOfItems){
                        return index < numOfItems;
                    }
                    return index;
                }).map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </CollectionItemMainWrapper>
    </CollectionPreviewWrapper>
);

export default CollectionPreview;