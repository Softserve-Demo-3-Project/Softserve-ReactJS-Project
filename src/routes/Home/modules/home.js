import 'whatwg-fetch'

export const RECEIVE_ADS = 'RECEIVE_ADS'

export const fetchAds = () => {
  return (dispatch, getState) => {
    return fetch('http://127.0.0.1:3001/ads')
      .then(res => res.json())
      .then(ads => {
        dispatch({
          type: RECEIVE_ADS,
          payload: ads
        })
      })
  }
}


export const actions = {
  fetchAds
}

const ACTION_HANDLERS = {
  [RECEIVE_ADS]: (state, action) => Object.assign([], state, action.payload)
}

const initialState = []

export default function homeReducer(state = initialState, action) {
  let handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
