import React from "react";
import HomePage from "./pages/homepage";
import ShopListPage from "./pages/shop-list-page";
import Header from "./components/header";
import AuthenticationPage from "./pages/authentication-page";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "./styles/style";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { auth, createUserProfile } from "./firebase/firebase.utils";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.primaryColor};
    font-family: ${(props) => props.theme.fontFamiliy};
    color: ${(props) => props.theme.primaryFontColor};
    margin: 0;
    padding: 2rem 0;
  }
  *{
    box-sizing: border-box;
    font-size: 10px;
  }
`;

const CustomSwitch = styled(Switch)`
  margin-top: 20rem;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  unsubscribeAuth = null;

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            user: snapShot.id,
            ...snapShot.data()
          }, () => {
            console.log(this.state)
          }) 
        })
        console.log(this.state);
      }else {
        this.setState({ user: userAuth})
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeAuth();
  }


  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Header user={this.state.user}/>
          <CustomSwitch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopListPage}/>
            <Route path="/auth" component={AuthenticationPage}/>
          </CustomSwitch>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
export default App;
