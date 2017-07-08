import { connect } from 'react-redux'

import HomeView from './../components/HomeView'
import { fetchAds, patchAd } from './../modules/home'


const mapDispatchToProps = {
  fetchAds,
  patchAd
}

const mapStateToProps = (state) => ({
  ads: state.ads
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
