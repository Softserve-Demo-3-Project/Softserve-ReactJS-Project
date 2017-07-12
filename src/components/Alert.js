import React, { Component } from 'react';
import {fetchAds} from "../routes/Home/modules/home";
import {connect} from 'react-redux'



const Alert = ({ads, fetchAds}) => {
  return (
    <div>
      {JSON.stringify(ads)}
      <button onClick={fetchAds}>Fetch</button>
    </div>
  );
};

const mapActionsToProps = {
  fetchAds
};

const mapStateToProps = (state) => ({
  ads: state.ads
})


export default connect(mapStateToProps, mapActionsToProps)(Alert)
