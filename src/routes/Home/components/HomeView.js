import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import PanelCollapse from './PanelCollapse'
import GMap from './GMap'
import Loading from './../../../components/Loading/Loading'

const ListAds = ({ ads, updateAd, deleteAd }) => (
  <div>
    {ads.map(ad => (
      <PanelCollapse key={ad.id} ad={ad} updateAd={updateAd} deleteAd={deleteAd} />
    ))}
    <div className='f-left' style={{ width: '100%', height: 300, background: '#9d9d9d' }}>
      <GMap className='my-map' ads={ads}/>
    </div>
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
  }

  handleDeleteAd = (id) => {
    this.props.deleteAd(id)
  }

  render() {
    return (
      <div>
        {this.props.isFetching ?
          <Loading /> :
          <ListAds ads={this.props.ads} updateAd={this.handleUpdateAd} deleteAd={this.handleDeleteAd} />}
      </div>
    );
  }
}

export default HomeView
