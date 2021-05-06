import React from "react";
import styled from "styled-components";


const AccountItemWrapper = styled.div`
    position: relative;
    display: block;
    margin: 0 1rem;
    cursor: pointer;
`;

const IconName = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
`;

const HeaderToolsItem = ({icon, iconName}) => {
    const TheIcon = icon;
    return(
        <AccountItemWrapper>
            <TheIcon/>
            <IconName>{iconName}</IconName>
        </AccountItemWrapper>   
    )
};

export default HeaderToolsItem;