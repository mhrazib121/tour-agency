import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useService from '../../Hooks/useService';

const PackageDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    // const { service, setService } = useState({})
    const [services] = useService();
    const { id } = useParams();

    const serviceData = services.find(service => service._id === id);

    const onSubmit = data => {
        data.package = serviceData;
        data.status = 'Pending';

        axios.post('https://dark-cheateau-90234.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    history.push('/mybooking');
                }
            })
    }

    console.log(services)

    // console.log(service.description);
    // console.log(service)
    console.log(serviceData)
    return (
        <div className="row my-5 container mx-auto">

            <section className="col-lg-6  ">
                <h3 > Package Name: {serviceData?.serviceName}  </h3>
                <img className="w-50 my-3" src={serviceData?.img} alt="" />
                <p > Details: {serviceData?.description} </p>
                <h4 > Package Price: $ {serviceData?.fee} </h4>
            </section>

            {/* Users details  */}
            <form className="m-auto col-lg-6" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} defaultValue={user.displayName} />
                <input type="email" {...register("email")} defaultValue={user.email} />
                <input type="address" {...register("address")} placeholder="Address" />
                <input type="number" {...register("phone")} placeholder="Pnone Number" />
                <input type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default PackageDetails;