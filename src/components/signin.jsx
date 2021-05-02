import React from "react";
import InputForm from "./input-form";
import styled from "styled-components";
import LinkBtn from "../styles/LinkButton";
import CustomButton from "./custom-button";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase/firebase.utils";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import colors from "../styles/colors";

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Headline>Are you a user?</Headline>
        <Form onSubmit={this.handleSubmit}>
          <InputForm
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
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
      </div>
    );
  }
}

export default SignIn;
