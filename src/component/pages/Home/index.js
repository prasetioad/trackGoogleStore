import React, { useEffect, useState } from 'react'
import { getStore } from '../../config/Redux/action/store'
import Navbar from '../../compt/Navbar/index'
import axios from 'axios'
import './style.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Index() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}`)
            .then((res) => {
                setData(res.data.merchants)
                dispatch(getStore(res.data.merchants))
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])
    const viewStore =(id)=>{
        history.push(`/store/${id}`)
    }

    const handleSearch =(e)=>{
        if(e.target.value.length > 0){
        for (let i = 0; i < data.length; i++) {
            let n = data[i].nama.includes(e.target.value)
            if (n) {
                setData([data[i]])
            }
        }
        }else {
            axios.get(`${process.env.REACT_APP_SERVER}`)
            .then((res) => {
                setData(res.data.merchants)
                dispatch(getStore(res.data.merchants))
            })
            .catch((err) => {
                console.log(err.response);
            })
        }
    }
    return (
        <div>
            <Navbar search={(e)=>{handleSearch(e)}}/>
            <div className="main-containe">
                <div className="main-body">
                    {data ? 
                    data.map((item, index)=>{return(
                    <div className="main-card" key={index} onClick={()=>{viewStore(item.id)}}>
                        <div className="standImg">
                            <img src={item.image_url_stand} alt="image" />
                        </div>
                        <div className="shortProfileStore">
                            <div className="shortDetil">
                                <h3>{item.nama}</h3>
                                <p style={{ fontWeight: '300' }}>{item.kategori}</p>
                                <p>{item.alamat}</p>
                            </div>
                        </div>
                    </div>
                    )}) :
                    <div>
                        <h1>Loading fetching data ...</h1>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Index
