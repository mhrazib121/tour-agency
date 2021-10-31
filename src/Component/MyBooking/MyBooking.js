import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';

const MyBooking = () => {
    const { service, setService } = useState({})
    const [ services]  = useService();
    const { id } = useParams();
    // console.log(service);
    // useEffect(()=>{
    //     fetch(`https://dark-cheateau-90234.herokuapp.com/services/${id}`)
    //     .then(res=> res.json())
    //     .then(data=> setService(data));
    // }, [])
    console.log(services)
    // const serviceData = services.find(service => service._id === id);
    // console.log(serviceData)
    return (
        <div>
            <p>my booking: {id}</p>
            {/* <p>my booking: {serviceData.length}</p> */}
            {/* <h1> Package Name : {service.serviceName}</h1> */}
            {/* <img src= {service.img} alt="" /> */}
        </div>
    );
};

export default MyBooking;