import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import PanelCollapse from './PanelCollapse'

const ListAds = ({ ads, updateAd }) => (
  <div>
    {ads.map(ad => (
      <PanelCollapse key={ad.id} ad={ad} updateAd={updateAd} />
    ))}
  </div>
)


class HomeView extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAds();
  }

  handleUpdateAd = (ad) => {
    console.log("here")
    this.props.patchAd(ad)
  }


  render() {
    return (
      <div className='container'>
        <ListAds ads={this.props.ads} updateAd={this.handleUpdateAd} />
        {/*<button onClick={this.updateAd}>Update ad</button>*/}
      </div>
    );
  }
}

export default HomeView
