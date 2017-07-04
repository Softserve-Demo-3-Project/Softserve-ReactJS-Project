import React from 'react'
import PropTypes from 'prop-types'

export const Counter = ({ counter, increment, doubleAsync, fetchAds }) => {
  let a = 4;
  return <div style={{ margin: '0 auto' }} >
    <h2>Ads Length: {counter.length}</h2>
    <ul>{counter.map(ad => <div>{ad.title}</div>)}</ul>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
    <button className='btn btn-secondary' onClick={fetchAds}>
      Fetch Ads
    </button>
  </div>
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
