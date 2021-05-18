import React from "react";
import InputForm from "../../components/InputForm";
import { auth } from "../../firebase/firebase.utils";
import styled from "styled-components";
import LinkBtn from "../../styles/LinkButton";
import CustomButton from "../../components/CustomButton";
import Form from "../../styles/Form";
import useCustomForm from "../../custom-hooks/useCustomForm"
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebase/firebase.utils";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import colors from "../../styles/colors";

const SignInWrapper = styled.div`
  width: 50%;
  padding-top: 5rem;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

const SocialMediaBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FacebookIcon = styled(AiFillFacebook)`
  position: absolute;
  left: 7rem;
  top: 1.5rem;
  font-size: 3rem;
  margin-right: 1.5rem;
`;

const GoogleIcon = styled(AiOutlineGoogle)`
  position: absolute;
  left: 8rem;
  top: 1.5rem;
  font-size: 3rem;
  margin-right: 1.5rem;
`;

const GoogleBtn = styled(CustomButton)`
  background-color: ${colors.google};

  &:hover{
        background-color: ${colors.hoverGoogle};
    }
`;

const FacebookBtn = styled(CustomButton)`
  background-color: ${colors.facebook};

  &:hover{
        background-color: ${colors.hoverFacebook};
    }
`;

const SignIn = () => {
  
  const initialValues = {
    email: "",
    password: ""
  };

  const { values, handleChange } = useCustomForm({initialValues})

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const { user } = await auth.signInWithEmailAndPassword(values.email, values.password);
    }catch(error) {
      console.log(error);
    }
  }

    return (
      <SignInWrapper>
        <Headline>Are you a user?</Headline>
        <Form onSubmit={handleSubmit}>
          <InputForm
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
          />
          <CustomButton type="submit">Sign in</CustomButton>
          <SocialMediaBtns>
            <GoogleBtn onClick={signInWithGoogle}>
              <GoogleIcon/>
              Sign in with Google
            </GoogleBtn>
            <FacebookBtn onClick={signInWithFacebook}>
            <FacebookIcon/>
              Sign in with Facebook
            </FacebookBtn>
          </SocialMediaBtns>
          <LinkBtn width="1px">Forgot a password?</LinkBtn>
        </Form>
      </SignInWrapper>
    );
  }

export default SignIn;
