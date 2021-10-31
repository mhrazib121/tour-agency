import { useEffect } from 'react';
import { useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://dark-cheateau-90234.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [
        services
    ]
};

export default useService;