import React from "react";
import InputForm from "./input-form";
import styled from "styled-components";
import LinkBtn from "../styles/LinkButton";
import CustomButton from "./custom-button";

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

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({email: "", password: ""}); 
  }

  handleChange = e => {
      const { value, name } = e.target;

      this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Headline>Are you a user?</Headline>
        <Form onSubmit={this.handleSubmit}>
          <InputForm name="email" type="email" label="Email" value={this.state.email} onChange={this.handleChange}/>
          <InputForm name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange}/>
          <CustomButton type="submit">Sign in</CustomButton>
          <LinkBtn width="1px">Forgot a password?</LinkBtn>
        </Form>
        
      </div>
    );
  }
}

export default SignIn;
