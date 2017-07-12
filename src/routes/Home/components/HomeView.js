import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import PanelCollapse from './PanelCollapse'
import Loading from './../../../components/Loading/Loading'

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

  componentWillUpdate(prevState) {
    if(this.props.ads !== prevState.ads){
      console.log("Update")
    }
  }

  handleUpdateAd = (ad) => {
    this.props.patchAd(ad)
  }

  handleDeleteAd = (id) => {
    this.props.deleteAd(id)
  }

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        {this.props.isFetching ?
        <Loading/>:
        <ListAds ads={this.props.ads} updateAd={this.handleUpdateAd} deleteAd={this.handleDeleteAd} />}

      </div>
    );
  }
}

export default HomeView
