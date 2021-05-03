import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import HomeScreen from './Screen/HomeScreen';
import Header from './Containers/Header';
import {Footer} from './Containers/Footer';
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import LoginScreen from './Screen/LoginScreen';
import SignupScreen from './Screen/SignupScreen';
import { auth } from './FireBase/Firebase';
import MenuScreen from './Screen/MenuScreen';
import FeaturedScreen from './Screen/FeaturedScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    //user signin ..................
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName
         }))
      } else {
        //user logged out.................
        dispatch(logout())
      }
    })
  }, [dispatch])
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path="/account/signin">
             {user ? <Redirect to="/menu"/> : <LoginScreen/>}
          </Route>
          <Route exact path="/account/create">
             {user ? <Redirect to="/menu"/> : <SignupScreen/>}
          </Route>
          <Route exact path="/menu">
            {!user
              ?(<Redirect to="/account/signin"/>)
              : (
                <>
                <Header pageMenu />
                <MenuScreen/>
                </>
              )
            }
          </Route>
          <Route exact path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
                <Footer/>
            </Fade>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
