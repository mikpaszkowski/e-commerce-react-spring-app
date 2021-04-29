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
`;

const CollectionItemMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewWrapper>
        <Title>{title.toUpperCase()}</Title>
        <CollectionItemMainWrapper >
            {
                items.filter((item, index) => index < 4).map(({id, ...item}) => (
                    <CollectionItem key={id} {...item}/>
                ))
            }
        </CollectionItemMainWrapper>
    </CollectionPreviewWrapper>
);

export default CollectionPreview;