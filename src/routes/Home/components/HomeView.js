import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import PanelCollapse from './PanelCollapse'

const ListAds = ({ ads, updateAd, deleteAd }) => (
  <div>
    {ads.map(ad => (
      <PanelCollapse key={ad.id} ad={ad} updateAd={updateAd} deleteAd={deleteAd} />
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
    this.props.patchAd(ad)
    .then((res) => {
      this.props.fetchAds()
    })
  }

  handleDeleteAd = (id) => {
    this.props.deleteAd(id)
    .then((res) => {
      this.props.fetchAds()
    })
  }

  render() {
    return (
      <div className='container'>
        <ListAds ads={this.props.ads} updateAd={this.handleUpdateAd} deleteAd={this.handleDeleteAd} />
      </div>
    );
  }
}

export default HomeView
