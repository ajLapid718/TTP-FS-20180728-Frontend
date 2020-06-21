import axios from 'axios';

const BASE_URL = "https://workforce-stock-server.herokuapp.com";

// ACTION TYPES;
const FETCH_USER_TRANSACTIONS = 'FETCH_USER_TRANSACTIONS';

// ACTION CREATORS;
const fetchUserTransactions = transactions => {
  return {
    type: FETCH_USER_TRANSACTIONS,
    payload: transactions
  }
}

// THUNK CREATORS;
export const fetchUserTransactionsThunk = userId => dispatch => {
  return axios
    .get(`${BASE_URL}/api/users/${userId}/transactions`)
    .then(res => res.data)
    .then(transactions => dispatch(fetchUserTransactions(transactions)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
