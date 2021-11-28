// import GoogleMapReact from 'google-map-react'
//
// const Map = ({ center, zoom }) => {
//   return (
//     <div className="map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyC2FDx5JllouKLiJkBEnza0d45J3Rs_V60' }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//       </GoogleMapReact>
//     </div>
//   )
// }
//
// Map.defaultProps = {
//   center: {
//     lat: 42.3256,
//     lng: -122.8753
//   },
//   zoom: 6
// }
//
// export default Map

import React from 'react';
import {GoogleMap} from "@react-google-maps/api";
import {useLoadScript} from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}
const center = {
    lat: 31.968599,
    lng: -99.901810,
}

export default function GoogleMaps() {
    const{isLoaded, loadError} = useLoadScript({
        // Uncomment the line below and add your API key
        // googleMapsApiKey: '<Your API Key>',
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return(
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        />
    )
}
