import React from "react";
import styled from "styled-components";
import HeaderToolsItem from "./header-tools-item";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const ToolsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 2rem;
`;

//Breaking the DRY rule.....I know... I will fix that later 
const SearchIcon = styled(FiSearch)`
    font-size: 3rem;
    width: 100%;
`;

const UserIcon = styled(FiUser)`
    font-size: 3rem;
    width: 100%;
`;

const ShoppingCart = styled(FiShoppingCart)`
    font-size: 3rem;
    width: 100%;
`;


const HeaderMainTools = () => {

    return(
        <ToolsWrapper>
            <HeaderToolsItem iconName="search" icon={ SearchIcon }/>
            <HeaderToolsItem iconName="account" icon={ UserIcon }/>
            <HeaderToolsItem iconName="cart" icon={ ShoppingCart } />
        </ToolsWrapper>
    );
};

export default HeaderMainTools;