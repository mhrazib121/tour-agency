import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dark-cheateau-90234.herokuapp.com/services', data)
            .then(res => {
                // console.log(res)
                if(res.data.insertedId){
                    alert('Added Succesfully')
                    reset();
                }
            })
    }

    return (
        <div>
            <p>add service add</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("serviceName",)} placeholder="Service Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;