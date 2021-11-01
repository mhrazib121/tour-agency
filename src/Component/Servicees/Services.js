import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    // Hooks 
    const [services] = useService();
    console.log(services);
    
    return (
        <Container>
            <h1 className="text-center text-success my-3"> Our Best Tour Packages</h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    services.map(service =>
                        <ServiceCard key={service.id} service={service}></ServiceCard>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;