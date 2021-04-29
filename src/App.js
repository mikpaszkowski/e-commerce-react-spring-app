import React from "react";
import HomePage from "./pages/homepage";
import ShopListPage from "./pages/shop-list-page";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "./styles/style";
import { Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.primaryColor};
    font-family: ${(props) => props.theme.fontFamiliy};
    color: ${(props) => props.theme.primaryFontColor};
    margin: 0;
    padding: 2rem 10rem;
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopListPage}/>
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
