import {fetchUser, fetchUserSuccess, fetchUserFailure} from './userActions';

export const getUser = () => {
  return fetch('https://randomuser.me/api/0.4/?randomapi')
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchUserData = () => {
  return dispatch => {
    dispatch(fetchUser());
    return getUser()
      .then(res => {
        dispatch(fetchUserSuccess(res.results[0]));
        return res.results[0];
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
