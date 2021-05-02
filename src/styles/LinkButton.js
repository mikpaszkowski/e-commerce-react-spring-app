import styled from "styled-components";


const LinkPasswordBtn = styled.button`
    margin: 6rem auto;
    border: none;
    background-color: transparent;
    border-bottom-width: ${props => props.width};
    border-bottom-color: ${props => props.theme.btnDefaultColor};
    border-bottom-style: solid;
    font-weight: 600;
    font-size: 2rem;
    width: 22rem;
    outline: none;
    cursor: pointer;
`;

export default LinkPasswordBtn;