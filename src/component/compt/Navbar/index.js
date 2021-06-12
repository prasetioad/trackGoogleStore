import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import './style.css'

function Index({search}) {
    const history = useHistory()
    return (
        <div>
            <div className="navWidth" >
                <div className="navHome" onClick={()=>{history.push('/')}}>
                    <p>Dashboard</p>
                </div>
                <div className="navSearch">
                    <div className="navSearchObjek">
                        <input type="search" name="search" id="" style={{borderRadius: '6px', width:'100%', height:'40px'}} onChange={search}/>
                    </div>
                    <div className="searchIcon">
                        <FaSearch style={{opacity: '0.5', fontSize:'24px'}}/>
                    </div>
                </div>
                <div className="navMap" onClick={()=>{history.push('/map')}}>
                    <p>Map</p>
                </div>
            </div>

        </div>
    )
}

export default Index
