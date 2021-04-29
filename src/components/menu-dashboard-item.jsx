import React from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
  min-width: 35rem;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .1rem solid black;
  margin: 0 .7rem 1.5rem;
  background-position: center;
  background-size: cover;
  transition: all .3s ease-in-out;

  &:hover{
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 1.7rem 0 rgba(50, 50, 50, 0.71);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  margin: .8rem;
  color: ${props => props.theme.primaryColor};
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-weight: lighter;
  color: ${props => props.theme.primaryColor};
`;

const InfoWrapper = styled.div`
  border: 1px solid white;
  padding: 1rem 3rem;
`;


const MenuDashBoardItem = ({title, imageURL}) => (
  <MenuItemWrapper style={{
    backgroundImage: `url(${imageURL})`
  }}>
    <InfoWrapper>
      <Title>{title}</Title>
      <Subtitle className="subtitle">SHOP NOW</Subtitle>
    </InfoWrapper>
  </MenuItemWrapper>
);



export default MenuDashBoardItem;