import axios from 'axios';

import { GET_ERRORS } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://nodedb-takasak1.c9users.io:8080/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};