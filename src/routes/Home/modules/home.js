import 'whatwg-fetch'

export const REQUEST_ADS = 'REQUEST_ADS'
export const RECEIVE_ADS = 'RECEIVE_ADS'
export const PATCH_AD = 'PATCH_AD'
export const DELETE_AD = 'DELETE_AD'

export const fetchAds = () => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_ADS,
      isFetching: true
    })
    return fetch('http://127.0.0.1:3001/ads')
      .then(res => res.json())
      .then(ads => {
        dispatch({
          type: RECEIVE_ADS,
          payload: ads,
          isFetching: false
        })
      })
  }
}

export const patchAd = (ad) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:3001/ads/${ad.id}`, {
      method: 'PATCH',
      body: JSON.stringify(ad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((ad) => {
        dispatch({
          type: PATCH_AD,
          payload: ad
        })
      })
      .catch((err) => console.error(err))
  }
}

export const deleteAd = (id) => {
  return (dispatch) => {
    return fetch(`http://127.0.0.1:3001/ads/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        dispatch({
          type: DELETE_AD,
          payload: id
        })
      })
  }
}

const ACTION_HANDLERS = {
  [REQUEST_ADS]: (state, action) => Object.assign({}, state, {isFetching: action.isFetching}),
  [RECEIVE_ADS]: (state, action) => Object.assign({}, state, {items: action.payload, isFetching: action.isFetching}),
  [PATCH_AD]: (state, action) => Object.assign({}, state, {items: state.items.map((ad) => ad.id === action.payload.id ? {...ad, ...action.payload} : ad)}),
  [DELETE_AD]: (state, action) => Object.assign({}, state, {items: state.items.filter((ad) => action.payload !== ad.id)})
}

const initialState = {
  items: [],
  isFetching: false
}

export default function homeReducer(state = initialState, action) {
  let handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
