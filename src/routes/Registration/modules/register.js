import 'whatwg-fetch';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (user) => {
  return (dispatch) => {
    return fetch('http://127.0.0.1:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: REGISTER_USER,
        payload: user
      });
      window.location.href = "/";
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export const actions = {
  registerUser
};

const ACTION_HANDLERS = {
  [REGISTER_USER]    : (state, action) => Object.assign({}, state, action.payload)
}

const initialState = {}

export default function registerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}