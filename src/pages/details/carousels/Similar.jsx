import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from "../../../components/carousel/Carousel"
const Similar = ({mediaType,id}) => {

    const {data,loading,error} = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    useEffect(()=>{
        console.log("data",data);
    },[data])
  return (
    <Carousel 
    
    title={title}
    data={data?.results}
    loading={loading}
    endpoint={mediaType}
    />
  )
}

export default Similar