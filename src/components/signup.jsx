import React, { useState } from "react";

import InputForm from "./input-form";
import CustomButton from "./custom-button";
import Form from "../styles/Form";
import styled from "styled-components";

import { auth, createUserProfile } from "../firebase/firebase.utils";
import useCustomForm from "../custom-hooks/useCustomForm";

const SignUpWrapper = styled.div`
  width: 50%;
  padding-top: 5rem;
  background-color: ${props => props.theme.secondaryColor};
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

const SignUp = () => {

  const initialValues = {
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: ""
  }

  const { values, handleChange } = useCustomForm({initialValues});

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(values.password != values.confirmPassword){
      alert("Passwords are not the same.");
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(values.email, values.password);

      await createUserProfile(user, {values});

      

    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <SignUpWrapper>
      <Headline>Is this your first visit?</Headline>
      <Form onSubmit={handleSubmit}>
        <InputForm
          name="email"
          type="email"
          label="Email"
          value={values.email}
          transparent={true}
          onChange={handleChange}
        />
        <InputForm
          name="name"
          type="name"
          label="Name"
          value={values.name}
          transparent={true}
          onChange={handleChange}
        />
        <InputForm
          name="surname"
          type="surname"
          label="Surname"
          value={values.surname}
          transparent={true}
          onChange={handleChange}
        />
        <InputForm
          name="password"
          type="password"
          label="Password"
          value={values.password}
          transparent={true}
          onChange={handleChange}
        />
        <InputForm
          name="confirmPassword"
          type="confirmPassword"
          label="Confirm password"
          value={values.confirmPassword}
          transparent={true}
          onChange={handleChange}
        />
        <CustomButton type="submit">Create account</CustomButton>
      </Form>
        
    </SignUpWrapper>
  );
}

export default SignUp;
