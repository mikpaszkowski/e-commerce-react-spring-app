import * as React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;

    & > h1 {
        font-size: 20rem;
        font-weight: 600;
        margin: 0;
    }

    & > h3 {
        font-size: 7rem;
        font-weight: 600;
        margin: 0;
    }
    & > p {
        font-size: 4rem;
        font-weight: 300;
    }

`;


const NotFound = () => {

    return(
        <NotFoundWrapper>
            <h1>404</h1>
            <h3>Not Found</h3>
            <p>The resource requested could not be found on the server...</p>
        </NotFoundWrapper>
    );
};

export default NotFound;