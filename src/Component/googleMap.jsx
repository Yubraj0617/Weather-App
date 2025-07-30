import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
function GooogleMap({lat,lon}) {
   
    
    const containerStyle = {
    width: '100%',
    height: '300px'
  };

  
  const center ={
    lat:Number(lat) ||0,
    lng:Number(lon) ||0
  };

    return (
        <>
            <div>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker position={{ lat: center.lat, lng: center.lng }} />
                </GoogleMap>
            </div>
        </>
    )
}

export default GooogleMap