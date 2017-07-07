import { connect } from 'react-redux'

import HomeView from './../components/HomeView'
import { fetchAds } from './../modules/home'


const mapDispatchToProps = {
  fetchAds
}

const mapStateToProps = (state) => ({
  ads: state.ads
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
