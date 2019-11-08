import {
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  LIKE_USER,
} from './userActions';

const initialState = {
  fetchUserData: {
    data: {},
    loading: false,
    error: null,
  },
  likedUser: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        fetchUserData: {
          data: {},
          loading: true,
          error: null,
        },
      };
    }
    case FETCH_USER_SUCCESS: {
      const {user} = action.payload;
      return {
        ...state,
        fetchUserData: {
          data: user,
          loading: false,
          error: null,
        },
      };
    }
    case FETCH_USER_FAILURE: {
      const {error} = action.payload;
      return {
        ...state,
        fetchUserData: {
          data: {},
          loading: false,
          error: error,
        },
      };
    }
    case LIKE_USER: {
      const {user} = action.payload;
      return {
        ...state,
        likedUser: [...state.likedUser, user],
      };
    }
    default:
      return state;
  }
}
