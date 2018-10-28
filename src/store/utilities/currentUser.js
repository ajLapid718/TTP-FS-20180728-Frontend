import axios from 'axios';

// ACTION TYPES;
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";

// ACTION CREATORS;
const registerUser = user => {
  return {
    type: REGISTER_USER,
    payload: user
  }
}

const loginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

// THUNK CREATORS;
export const registerUserThunk = (firstName, lastName, email, password) => dispatch => {
  return axios
    .post('/auth/signup', {firstName, lastName, email, password})
    .then(res => res.data)
    .then(user => dispatch(registerUser(user)))
    .catch(err => console.log(err))
}

export const loginUserThunk = (email, password) => dispatch => {
  return axios
    .post('/auth/login', {email, password})
    .then(res => res.data)
    .then(user => dispatch(loginUser(user)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
