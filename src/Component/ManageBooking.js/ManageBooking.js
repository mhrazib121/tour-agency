import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import BookingItem from '../BookingItem/BookingItem';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch("https://dark-cheateau-90234.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

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
    console.log(bookings);
    // const booking = bookings.map(booking=> booking)
    return (
        <div>
            <h1> My booking </h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    bookings.map(booking => <BookingItem key={booking?._id} booking={booking} deleteBooking={deleteBooking}> </BookingItem>
                    )
                }
            </Row>
        </div>

    )
};

export default ManageBooking;