import 'whatwg-fetch';

export const REGISTER_USER = 'REGISTER_USER';
export const USER_EXISTENCE = 'USER_EXISTENCE';

export const registerUser = (user) => {
  return (dispatch) => {
    return fetch('http://127.0.0.1:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(user => {
        dispatch({type: REGISTER_USER, payload: user});
        window.location.href = "/";
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export const isUserTaken = (event) => {
  return (dispatch) => {
    return fetch('http://127.0.0.1:3001/users?username')
      .then(res => res.json())
      .then(user => {
        dispatch({type: USER_EXISTENCE, username});
      })
      .catch(err => {
        console.error(err);
      });
  }
  if(event.key == 'Enter'){
    console.log('enter press here! ')
  }
}


export const actions = {
  registerUser,
  isUserTaken
};

const ACTION_HANDLERS = {
  [REGISTER_USER]: (state, action) => Object.assign({}, state, action.payload),
  [USER_EXISTENCE]: (state, action) => Object.assign({}, state, action.username)
}

const initialState = {}

export default function registerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler
    ? handler(state, action)
    : state
}
