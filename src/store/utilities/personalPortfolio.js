import axios from 'axios';

const BASE_URL = "https://workforce-stock-server.herokuapp.com";


// ACTION TYPES;
const FETCH_USER_PORTFOLIO = 'FETCH_USER_PORTFOLIO';

// ACTION CREATORS;
const fetchUserPortfolio = portfolio => {
  return {
    type: FETCH_USER_PORTFOLIO,
    payload: portfolio
  }
}

// THUNK CREATORS;
export const fetchUserPortfolioThunk = userId => dispatch => {
  return axios
    .get(`${BASE_URL}/api/users/${userId}/portfolio`)
    .then(res => res.data)
    .then(portfolio => dispatch(fetchUserPortfolio(portfolio)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_PORTFOLIO:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
