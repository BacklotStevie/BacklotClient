import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from './backlot-logo.png'
import { useState, useContext } from "react";
import { userContext } from "../context/UserCtx";
import { useHistory } from 'react-router-dom'
import '../Header/header.css'

const Header = () => {

    const { user, setUser } = useContext(userContext);
    const history = useHistory()

    const logout = () => {
        setUser(null)
        history.push("/home");
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="mr-5 ml-5">
                <Navbar.Brand href="#home">
                    {/* <Logo
                    alt=""
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                    Dice Roller */}
                    <Link to="/home">
                        <img className="logo" src={Logo} alt='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <Link to="/reviews"><Nav.Link href="#reviews">Film Reviews</Nav.Link></Link>
                        <Link to="/podcastpage"><Nav.Link href="#podcast">Podcast</Nav.Link></Link>
                        <Link to="/videopage"><Nav.Link href="#videos">Videos</Nav.Link></Link>
                        <Link to="/teampage"><Nav.Link href="#team">Team</Nav.Link></Link>
                        <Link to="/aboutus"><Nav.Link href="#aboutus">About Us</Nav.Link></Link>
                        {user ? <Link onClick={logout}><Nav.Link href="#signup">Log Out</Nav.Link></Link> : <Link to="/signup"><Nav.Link href="#signup">Sign Up</Nav.Link></Link>}


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <nav className='navbar bg-dark'>
                <div className=''>
                    <Link to="/home">
                        <h3>B</h3>
                    </Link>
                </div>
                <div className=''>
                    <ul className='d-flex list-unstyled text-white nav-options'>
                        <li className='nav-options'>Film Reviews</li>
                        <li className='nav-options'>Podcast</li>
                        <li className='nav-options'>Videos</li>
                        <li className='nav-options'>Team</li>
                        <li className='nav-options'>About Us</li>
                    </ul>
                </div>
            </nav > */}
        </>
    );
};

export default Header;