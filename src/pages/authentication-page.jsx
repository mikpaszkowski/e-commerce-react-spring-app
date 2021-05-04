import React from "react";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
import styled from 'styled-components';

const AuthWrapper = styled.div`
       display: flex;
       justify-content: space-evenly;
       flex-direction: row;
       margin-top: 10rem;
       width: 100%;
`;


const AuthenticationPage = () => (

       <AuthWrapper>
              <SignIn/>
              <SignUp/>
       </AuthWrapper>
);


export default AuthenticationPage;