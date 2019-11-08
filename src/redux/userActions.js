export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const LIKE_USER = 'LIKE_USER';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: {user},
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: {error},
});

export const likeUser = user => ({
  type: LIKE_USER,
  payload: {user},
});
