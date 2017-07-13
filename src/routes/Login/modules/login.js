import 'whatwg-fetch';

export const LOGIN_USER = 'LOGIN_USER';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export const loginUser = (user) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:3001/users?username=${user.username}&password=${user.password}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(users => {
      if (users.length === 1) {
        //handle logged user
        dispatch({type: LOGIN_USER, payload: users[0]});
        window.location.href = "/";
      } else {
        dispatch({type: FAILED_LOGIN, hasFailedLogin: true});
        console.warn('User or password do not match any record.');
      }
    })
    .catch(err => {
      console.error(err);
    });
  };
}

export const actions = {
  loginUser
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_USER]: (state, action) => Object.assign({}, state, action.payload),
  [FAILED_LOGIN]: (state, action) => Object.assign({}, state, action.hasFailedLogin)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
