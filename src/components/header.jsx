import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo } from "../assets/homeLogo.svg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    height: 6rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0;
`;

const LinkContainer = styled(Link)`
    width: 6rem;
    height: 100%;
`;

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const OptionLink = styled(Link)`
    text-decoration: none;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    color: ${props => props.theme.primaryFontColor};

    &:hover{
        text-decoration: underline;
    }
`;


const Header = () => {
    return (
        <HeaderWrapper>
            <LinkContainer to="/">
                <Logo/>
            </LinkContainer>
            <Options>
                <OptionLink to="/newin">NEW IN</OptionLink>
                <OptionLink to="/shop">WOMAN</OptionLink>
                <OptionLink to="/shop">MEN</OptionLink>
                <OptionLink to="/shop">GIRLS</OptionLink>
                <OptionLink to="/shop">BOYS</OptionLink>
                <OptionLink to="/shop">ABOUT US</OptionLink>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
            </Options>
        </HeaderWrapper>
    )
};

export default Header;