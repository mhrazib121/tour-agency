import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const {service, setService}= useState({})
    const {serviceId} = useParams();
    console.log(service);
    useEffect(()=>{
        fetch(`https://dark-cheateau-90234.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json())
        .then(data=> setService(data));
    }, [])
    return (
        <div>
            <p>my booking: {serviceId}</p>
            {/* <h1> Package Name : {service.serviceName}</h1> */}
            {/* <img src= {service.img} alt="" /> */}
        </div>
    );
};

export default MyBooking;