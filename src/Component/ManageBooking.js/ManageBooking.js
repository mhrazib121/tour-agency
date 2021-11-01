import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageBookingItem from '../ManageBookingItem/ManageBookingItem';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch("https://dark-cheateau-90234.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const deleteBooking = id => {
        const proceed = window.confirm('Are You Sure, You Want To Cancel');
        if (proceed) {
            const url = `https://dark-cheateau-90234.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Cancel Successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    };
                });
        };
    };

    const updateBooking = id =>{
        const proceed = window.confirm('Do Want To Update Booking Status');
        if (proceed) {
            const url = `https://dark-cheateau-90234.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successfully');
                    }
                })
        } 
    }
    console.log(bookings);
    // const booking = bookings.map(booking=> booking)
    return (
        <div>
            <h1 className="text-center my-3"> Manage All Booking </h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    bookings.map(booking => <ManageBookingItem key={booking?._id} booking={booking} deleteBooking={deleteBooking} updateBooking={updateBooking}> </ManageBookingItem>
                    )
                }
            </Row>
        </div>

    )
};

export default ManageBooking;