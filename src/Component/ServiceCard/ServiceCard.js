import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    // console.log(props.service)
    const {serviceName, description, img, _id, fee } = props.service;
    return (
        <div>
        <Col className="shadow-lg ">
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <div>
                    
                        <h6> {description}</h6>
                        
                    </div>
                  
                    <div className="d-flex ">
                    <Link className="btn text-white me-2" to ={`/packageDetails/${_id}`}> Booking Now </Link>
                    <h5 className="mx-2 mt-2 pt-1 ms-auto"> Price: $ {fee} </h5>
                    </div>
                    {/* <button className="btn btn-success">Details</button> */}
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default ServiceCard;