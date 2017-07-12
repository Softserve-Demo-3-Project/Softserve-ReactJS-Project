import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class GMap extends Component {
    constructor() {
        super()
        this.state = {
            map: null
        }
    }

    mapLoded(map) {
        if (this.state.map != null) {
            return
        }
        this.setState({
            map: map
        })
    }

    render() {

        const markers = this.props.ads
            .filter(ad => ad.locationLat && ad.locationLng)
            .map((ad) => ({
                lat: ad.locationLat,
                lng: ad.locationLng
            }));

        const center = { lat: 42.1500000, lng: 25.4500000 };
        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                ref={this.mapLoded.bind(this)}
                defaultZoom={7}
                defaultCenter={center}>
                {markers.map((marker, index) => (
                    <Marker position={marker} key={index} />
                ))}
            </GoogleMap>

        ));

        return (
            <GettingStartedGoogleMap
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
        )
    }
}
export default GMap