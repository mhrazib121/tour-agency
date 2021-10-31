import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.css'
// import img from '../../Images/'

const Home = () => {
    const [services] = useService();
    return (
        <div >
            <div className="top_banner mb-5">
                <section className="container  d-lg-flex
        align-items-center jusify-content-between p-5">
                    <div>
                        {/* <h1> hello</h1> */}
                    </div>
                    <div className="text-white details_bg col-12 col-lg-6 ms-auto">
                        <div className="p-4">

                            <h1 className="mb-5 text-warning">World Tour Agency</h1>
                            <p>World Tour Agency is an experienced travel management company. We work with you to manage all elements of your travel in an efficient, cost effective and ethical manner. <br /> <br /> Since established in [1995], the primary aim was to provide quality travel services to business and leisure travellers. The agency continued to grow and branch out its interests to rise as one of the exponents in the travel industry.
                            </p>
                        </div>

                    </div>

                </section>
            </div>

            {/* Service Package  */}
            <h1> Our Tour <span className="text-warning">Package</span></h1>
            <Container>
                <Row className="g-3 m-3" xs={1} md={3} >
                    {
                        services.map(service =>
                            <ServiceCard key={service.id} service={service}></ServiceCard>
                        )
                    }
                </Row>
            </Container>

            {/* <!-- FAQ Section  --> */}
            <section className="container my-5">
                <h1 className="text-center my-5"> Frequently Asked <span className="text-warning ">Questions</span> </h1>
                <div className="d-lg-flex  align-items-center">
                    <div className="d-lg-flex justify-content-center">
                        <div className="col-lg-7">
                            <img className="w-100" src="https://image.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg" alt="" />
                        </div>
                    </div>
                    {/* <!-- Anccordian Start  --> */}
                    <div className="col-lg-5">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Are you carry the all transportation and hotel booking cost ?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> Yes, of Course. We will carry out your all transportation and hotel booking cost. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        How can I book your package?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> It just a simple process. Just you have to register in our account then just pay for your booking through any kind international payment method. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Have you any couple package?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, We have couple package. If you are Husband and Wife, you are mostly welcome with us.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Have you give some discount if we can join with you as a big team?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, If You join with us at least 10 members, We will provide you 10% discount. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Anccordian End  --> */}
                </div>
            </section>

            <section className="bg-primary p-3">
                <div className="text-dark">
                    <h2 className="text-warning">LET'S STAY IN TOUCH</h2>
                    <p>Get updates on sales specials and more</p>
                    <input className="p-2 w-25" type="text" placeholder="Give Your opinion"/>
                    <br />
                    <button className="btn bg-btn">Submit</button>
                    <button className="btn bg-btn my-1 mx-2">Reset</button>
                </div>
            </section>

        </div>
    );
};

export default Home;