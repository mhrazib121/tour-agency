import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    console.log(props.service)
    const {serviceName, description, img, } = props.service;
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
                  
                    <Link className="btn text-white" to ={`/details/${description}`}> Booking Now </Link>
                    {/* <button className="btn btn-success">Details</button> */}
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default ServiceCard;