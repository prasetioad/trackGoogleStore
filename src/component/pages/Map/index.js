import React, { useEffect, useState } from 'react'
import App from '../../compt/map2/index'
import Navbar from '../../compt/Navbar'
import SimpleMap from '../../compt/map'
import axios from 'axios'

function Map() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}`)
        .then((res)=>{
            console.log(res.data.merchants);
            setData(res.data.merchants)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }, [])
    console.log(data);
    return (
        <div>
            <Navbar />
            <div>
                <div className="mapPageContainer" style={{width:'100%', height:'100%'}}>
                {data.length !== 0 &&
                    <SimpleMap data={data}/>
                }
                </div>
            </div>
        </div>
    )
}

export default Map
