import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
function SimpleMap({data}) {
    const [longitude, setlongitude] = useState({
        lat: null,
        lng: null
    })
    useEffect(() => {
        setlongitude({
            lat: -7.0117760912850455,
            lng: 110.42633190617926
        })
    }, [])
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%', marginRight:'auto', marginLeft:'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAi3GeFc2Uxt93suOzE6OSZFkdFjW8Lv4Y' }}
          defaultCenter={longitude}
          defaultZoom={11}
        >
          {data.map((spot)=>(
            <AnyReactComponent
              lat={spot.lat}
              lng={spot.lng}
              text={<div key={spot.id}>
                      <FaMapMarkerAlt style={{color:'red', fontSize:'22px'}} />
                    </div>}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
 
export default SimpleMap;