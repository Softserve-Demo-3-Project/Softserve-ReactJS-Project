import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import PanelCollapse from './PanelCollapse'

const ListAds = ({ ads }) => (
  <div>
    {ads.map(ad => (
      <PanelCollapse key={ad.id} ad={ad} />
    ))}
  </div>
)


class HomeView extends Component {

  componentDidMount() {
    this.props.fetchAds();
  }

  render() {
    return (
      <div className='container'>
        <ListAds ads={this.props.ads} />
      </div>
    );
  }
}

export default HomeView
