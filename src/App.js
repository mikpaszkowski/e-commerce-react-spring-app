import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "./styles/style";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.fontFamiliy};
    color: ${props => props.theme.primaryFontColor};
    margin: 0;
    padding: 0;
  }

  *{
    box-sizing: border-box;
    font-size: 10px;
  }


`;


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <React.Fragment>
        <GlobalStyle />
      <div className="App">
        <HomePage />
      </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
