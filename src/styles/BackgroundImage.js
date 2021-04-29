import styled from "styled-components";


export const BackgroundImage = styled.div`
width: ${props => (props.width ? props.width : "100%")};
height: ${props => (props.height ? props.height : "100%")};
background-position: center;
background-size: cover;
transition: transform 1s ease;
background-image: ${props => `url(${props.imageURL})`};
`; 