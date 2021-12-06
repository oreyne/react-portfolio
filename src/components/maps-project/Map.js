import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8){
      return <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
    }
    return null
  })
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      { locationInfo && <LocationInfoBox info={locationInfo} /> }
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3256,
    lng: -122.8753
  },
  zoom: 6
}

export default Map

// import React from 'react';
// import {GoogleMap} from "@react-google-maps/api";
// import {useLoadScript} from "@react-google-maps/api";
//
// const mapContainerStyle = {
//     width: '100vw',
//     height: '100vh',
// }
// const center = {
//     lat: 42.3256,
//     lng: -122.8753,
// }
//
// export default function GoogleMaps() {
//     const{isLoaded, loadError} = useLoadScript({
//         // Uncomment the line below and add your API key
//         // googleMapsApiKey: '<Your API Key>',
//     });
//
//     if (loadError) return "Error loading Maps";
//     if (!isLoaded) return "Loading Maps";
//
//     return(
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={6}
//           center={center}
//         />
//     )
// }
