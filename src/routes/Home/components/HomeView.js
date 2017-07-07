import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import PanelCollapse from './PanelCollapse'

class HomeView extends Component {

  componentDidMount() {
    this.props.fetchAds();
  }

  render() {
    return (
      <div className='container'>
        {this.props.ads.map(ad => (
          <PanelCollapse key={ad.id} ad={ad} />
        ))}
      </div>
    );
  }
}

export default HomeView
