import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import SimpleMap from '../../compt/map';
import Navbar from '../../compt/Navbar/index'
import './style.css'

function Index(props) {
    const globalData = useSelector(state => state);
    const params = useParams()
    const [getData, setGetData] = useState()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}`)
            .then((res) => {
                for (let i = 0; i < res.data.merchants.length; i++) {
                    let n = res.data.merchants[i].id.includes(params.id)
                    if (n) {
                        setData([res.data.merchants[i]])
                    }
                }
            })
    }, [])
    console.log(data);
    return (
        <div>
            <Navbar />
            <div className="storeContainer">
                <div className="storeObjek">
                    <div className="storeBody" id='storeBody'>
                        {data && data.map((item,index)=>{return(
                        <div className="storeMid">
                            <div className="storeImg">
                                <img src={item.image_url_stand} alt="image" key={index}/>
                            </div>
                            <div className="storeName">
                                <span>{data.nama}</span>
                            </div>
                        </div>
                        )})
                        }
                    </div>
                    <div className="storeData" id='storeBody'>
                        {data &&
                        data ?
                        data.map((item)=>{return(<>
                            <div className="storeMainData">
                                <div className="storeSide">
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span key={item.id}>Jenis Usaha</span>
                                            <p>{item.jenis_usaha}</p>
                                        </div>
                                        <div className="storeName">
                                            <span>kategori</span>
                                            <p>{item.kategori}</p>
                                        </div>
                                    </div>
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span>Jam buka</span>
                                            <p>{item.jam_tutup}</p>
                                        </div>
                                        <div className="storeName">
                                            <span>Jam tutup</span>
                                            <p>{item.jam_tutup}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="storeSide">
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span>Hanphone</span>
                                            <p>{item.phone}</p>
                                        </div>
                                        <div className="storeName">
                                            <span>Whatsapp</span>
                                            <p>{item.ada_whatsapp}</p>
                                        </div>
                                    </div>
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span>Twitter</span>
                                            <p>-</p>
                                        </div>
                                        <div className="storeName">
                                            <span>lainnya </span>
                                            <p>-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="storeSide" >
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span>Alamat</span>
                                            <p>{item.alamat}</p>
                                        </div>
                                        <div className="storeName">
                                            <span>Kelurahan</span>
                                            <p>{item.kelurahan}</p>
                                        </div>
                                    </div>
                                    <div className="storeSideItem">
                                        <div className="storeImgSide">
                                            <span>Kecamatan</span>
                                            <p>{item.kecamatan}</p>
                                        </div>
                                        <div className="storeName">
                                            <span>Kota</span>
                                            <p>{item.kota}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)}) :
                        <div className="storeMid">
                            <div className="storeImg">
                                <img src="" alt="loading ..." />
                            </div>
                            <div className="storeName">
                                <p>loading ...</p>
                            </div>
                        </div>
                        }
                    </div>
                    { data &&
                    <div className="productNav">
                        <SimpleMap data={data}/>
                    </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Index
