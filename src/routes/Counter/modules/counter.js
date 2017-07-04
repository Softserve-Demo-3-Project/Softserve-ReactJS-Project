import 'whatwg-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const RECEIVE_ADS = 'RECEIVE_ADS'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const fetchAds = () => {
  return (dispatch, getState) => {
    return fetch('http://127.0.0.1:3001/ads')
      .then(res => res.json())
      .then(ads => {
        dispatch({
          type    : RECEIVE_ADS,
          payload : ads
        })
      })
  }
}

export const actions = {
  increment,
  doubleAsync,
  fetchAds
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => Object.assign({}, state, {counter: state.counter + 1}),
  [COUNTER_DOUBLE_ASYNC] : (state, action) => Object.assign({}, state, {counter: state.counter * 2}),
  [RECEIVE_ADS] : (state, action) => Object.assign([], state, action.payload),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
