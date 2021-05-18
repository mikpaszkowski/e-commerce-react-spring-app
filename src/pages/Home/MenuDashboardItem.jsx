import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { BackgroundImage } from "../../styles/BackgroundImage";

const MenuItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 35rem;
  height: 35rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .1rem solid black;
  margin: 0 .7rem 1.5rem;
  transition: all .3s ease-in-out;


  &:last-child{
    height: 50rem;
  }
  &:nth-child(1),
  &:nth-child(2) {
    height: 80rem;
  }
  &:hover{
    cursor: pointer;
  }
  &:hover > div:nth-child(2) {
    opacity: .9;
  }

  &:hover > div:first-child {
    transform: scale(1.04);
  }

  &:first-child{
    min-width: 42rem;
  }
  &:nth-child(2){
    min-width: 42rem;
  }

`;
const InfoWrapper = styled.div`
  padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2.5rem;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: relative;
    transition: opacity .2s ease-out;
`;


const Title = styled.h1`
  font-size: 3rem;
  margin: .8rem;
  font-weight: 600;
  color: #555555;
  text-transform: uppercase;
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-weight: lighter;
  color: #555555;
`;

const BackgroundImageAbsolute = styled(BackgroundImage)`
  position: absolute;
`;


const MenuDashBoardItem = ({title, imageURL, urlParam, history, match}) => (

  <MenuItemWrapper onClick={() => history.push(`${match.url}${urlParam}`)}>
    <BackgroundImageAbsolute imageURL={imageURL}/>
    <InfoWrapper>
      <Title>{title}</Title>
      <Subtitle className="subtitle">SHOP NOW</Subtitle>
    </InfoWrapper>
  </MenuItemWrapper>
);



export default withRouter(MenuDashBoardItem);