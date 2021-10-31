import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user.displayName);
    // console.log(logOut)
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">World Tour Agency</Navbar.Brand>
                    <Nav className="me-auto menu-bar">
                        <NavLink className='header-btn' to="/home">Home</NavLink>
                        <NavLink className='header-btn' to="/services">Services</NavLink>
                        <NavLink className='header-btn' to="/addservice">Add Service</NavLink>


                        

                    </Nav>
                    <Nav className="ms-auto menu-bar">
                        
                    {user.email ?
                            <>
                                
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        My Deshboard
                                    </button>
                                    <ul className="dropdown-menu">
                                        <Link className="dropdown-item" to="/mybooking">My Booking</Link>
                                        <Link className="dropdown-item" to="/managebooking">Manage Booking</Link>
                                        
                                        
                                    </ul>
                                </div>

                                {/* // <NavLink className='header-btn' onClick={logOut}> Log Out</NavLink> */}
                                <button className='header-btn' onClick={logOut}> Log Out </button>
                            </>
                            :
                            <NavLink className='header-btn' to="/login">Log in</NavLink>}

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;