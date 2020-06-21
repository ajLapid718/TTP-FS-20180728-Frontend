import axios from 'axios';

const BASE_URL = "https://workforce-stock-server.herokuapp.com";

// ACTION TYPES;
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const GET_USER = 'GET_USER';

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

const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}


// THUNK CREATORS;
export const registerUserThunk = (firstName, lastName, email, password) => dispatch => {
  return axios
    .post(`${BASE_URL}/auth/signup`, {firstName, lastName, email, password})
    .then(res => res.data)
    .then(user => dispatch(registerUser(user)))
    .catch(err => console.log(err))
}

export const loginUserThunk = (email, password) => dispatch => {
  return axios
    .post(`${BASE_URL}/auth/login`, {email, password}, { withCredentials: true })
    .then(res => res.data)
    .then(user => dispatch(loginUser(user)))
    .catch(err => console.log(err))
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/auth/me`), { withCredentials: true };
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

// REDUCER;
const reducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
