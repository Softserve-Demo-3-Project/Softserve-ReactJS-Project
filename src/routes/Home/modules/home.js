import 'whatwg-fetch'

export const RECEIVE_ADS = 'RECEIVE_ADS'
export const PATCH_AD = 'PATCH_AD'
export const DELETE_AD = 'DELETE_AD'

export const fetchAds = () => {
  return (dispatch) => {
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


export const actions = {
  fetchAds,
  patchAd,
  deleteAd
}

const ACTION_HANDLERS = {
  [RECEIVE_ADS]: (state, action) => Object.assign([], state, action.payload),
  [PATCH_AD]: (state, action) => Object.assign([], state, action.payload),
  [DELETE_AD]: (state, action) => Object.assign([], state.filter(({ id }) => action.payload.id !== id))
}

const initialState = []

export default function homeReducer(state = initialState, action) {
  let handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
