import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import postAd from './screens/postAd';
import dashboard from './screens/dashboard';
import createProfile from './screens/createProfile';
import profiles from './screens/profiles';
import houseDetailOne from './screens/houseDetailOne';
import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {logoutUser, setCurrentUser} from './actions/authActions';




//Check for Token

if(localStorage.jwtToken){
//set auth token header auth
setAuthToken(localStorage.jwtToken);
//decode token
const decoded = jwt_decode(localStorage.jwtToken);

//set user an isAuthenticated

store.dispatch(setCurrentUser(decoded));

//Check for expired token
const currentTime=Date.now() /1000;

if(decoded.exp < currentTime){

  //Log out user

  store.dispatch(logoutUser());
  //TODO clear current profile
  //Redirect to login
  window.location.href='/login';
}

}

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Router>
      
      <div className="App">
        <Navbar />
      <Route exact path="/" component={ Landing } />
      <div className="container">
        
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/postad" component={postAd}/>
        <Route exact path="/dashboard" component ={dashboard}/>
        <Route exact path="/createProfile" component ={createProfile}/>
        <Route exact path="/profiles" component ={profiles}/>
        <Route exact path="/houseDetailOne" component ={houseDetailOne}/>
        
      </div>
        <Footer/>
      </div>
    
      </Router>
    </Provider>
  );
}}


export default App;
