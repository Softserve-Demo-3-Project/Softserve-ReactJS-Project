import { connect } from 'react-redux'

import HomeView from './../components/HomeView'
import { fetchAds, patchAd, deleteAd } from './../modules/home'


const mapDispatchToProps = {
  fetchAds,
  patchAd,
  deleteAd
}

const mapStateToProps = (state) => ({
  ads: state.ads.items,
  isFetching: state.ads.isFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
