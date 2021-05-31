import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Register User


export const registerUser=(userData,history) => dispatch=>{

    axios.post('api/users/register',userData)
    .then(res => history.push('/login'))
        .catch(err =>
            
            dispatch({

                type:GET_ERRORS,
                payload:err.response.data

            })
            
            );



};


//Login Get user Tokken

export const loginUser = (userData)=> dispatch=> {


    axios.post('/api/users/login', userData)
    .then(res =>{
        //Sva to Local Storage
        const {token} = res.data;
        //set Token to LS

        localStorage.setItem('jwtToken', token)
        //set Token to Auth Header
        setAuthToken(token);
     //Decode token to get user data
     const decoded = jwt_decode(token);
     //Set current user

     dispatch(setCurrentUser(decoded));

    } )

    .catch(err =>dispatch({

        type:GET_ERRORS,
        payload:err.response.data

    }))
};

//Set Loged in User
 export const setCurrentUser=decoded =>{

  return {

    type: SET_CURRENT_USER,
    payload: decoded
  };

 };

 //Log user out

 export const logoutUser = () => dispatch => {

  //Remove toekn from LocalStorage
  localStorage.removeItem('jwtToken');
  //Remove Auth header for future of requests
  setAuthToken(false);
  //set current user to empty object
  dispatch(setCurrentUser({}))

 }