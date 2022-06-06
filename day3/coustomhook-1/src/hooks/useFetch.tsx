
import axios from 'axios';
import React, { useEffect, useState } from 'react'
type User = {
    id: number;
    login: string;
    avatar_url: string;
  }
const useFetch = (url:string) => {
    const [loading,setIsloading] = useState(false);
    const [error,setIserror] = useState(false);
    const [data,setData] = useState<User[]>([])

    useEffect(()=>{
        setIsloading(true);
        axios.get(url)
        .then(({data})=>{
            setIsloading(false);
            setData(data.items)
        })
        .catch((err)=>{
            setIsloading(false);
            setIserror(true);
        })
    },[])
    return {loading,data,error}
}

export default useFetch