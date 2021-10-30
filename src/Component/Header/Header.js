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
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto menu-bar">
                        <NavLink className='header-btn' to="/home">Home</NavLink>
                        <NavLink className='header-btn' to="/services">Services</NavLink>
                        <NavLink className='header-btn' to="/addservice">Add Service</NavLink>


                        

                    </Nav>
                    <Nav className="ms-auto menu-bar">
                        
                    {user.email ?
                            <>
                                {/* <NavDropdown className="" title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item to="/mybooking">My Booking</NavDropdown.Item>
                                    <NavDropdown.Item to="managebooking">Manage Booking</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}

                                {/* <!-- Example single danger button --> */}
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <ul className="dropdown-menu">
                                        <Link className="dropdown-item" to="/mybooking">My Booking</Link>
                                        <Link className="dropdown-item" to="/managebooking">Manage Booking</Link>
                                        <Link className="dropdown-item" to="/mybooking">Action</Link>
                                        <Link className="dropdown-item" to="/mybooking">Another action</Link>
                                        
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