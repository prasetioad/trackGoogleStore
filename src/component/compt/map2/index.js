import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
    return (
        <div>
            <GoogleMap 
                defaultCenter={15}
                defaultCenter={{ lat: 45.421532, lng:-75.697189}}
            />
        </div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function App() {
    return (
        <div style={{width:'80vw', height:'80vh', marginLeft: 'auto', marginRight:'auto'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}


