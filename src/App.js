import React from "react";
import HomePage from "./pages/homepage";
import ShopListPage from "./pages/shop-list-page";
import Header from "./components/header";
import AuthenticationPage from "./pages/authentication-page";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "./styles/style";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from "./stores/user/userActions";


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

  unsubscribeAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }) 
        })
        console.log(this.state);
      }else {
        setCurrentUser(userAuth);
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
          <Header/>
          <CustomSwitch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopListPage}/>
            <Route exact path="/auth" render={() => this.props.user ? (<Redirect to="/"/>) : (<AuthenticationPage/>)}/>
          </CustomSwitch>
        </React.Fragment>
      </ThemeProvider>
    );
  }
};

const mapToStateProps = ({ user }) => ({
  user: user.currUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapToStateProps, mapDispatchToProps)(App);
