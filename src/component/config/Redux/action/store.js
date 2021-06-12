import axios from "axios";

export const getStore = (data)=>(dispatch)=>{
    dispatch({type: "GET_DATA", payload: data})
}