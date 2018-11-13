import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Map
        style={{ width: 600, height: 400 }}
        google={this.props.google}
        zoom={14}
        center={this.props.center}
      >

        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          position={this.props.center}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>yo</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBOCU4BXzp7ypj4aB98yqeP1HR0ilYruzA')
})(MapContainer)