import React, {Component} from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Navbar.css'; // Import the CSS file

export default class NavbarComp extends Component {
 render(){
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home" className="navbrand d-flex align-items-center justify-content-center">
                    <img src="src/assets/1ruFA.jpg" width="30" height="30" className="d-inline-block align-top" alt="Profile Picture"/>
                    <span>John Doe</span>
                </Navbar.Brand>
                 <Nav className="justify-content-end" style={{width: "100%"}}>
                 
                    <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#features">About</Nav.Link>
                    <Nav.Link className="nav-link" href="#pricing">Services</Nav.Link>
                    <Nav.Link className="nav-link" href="#pricing">Reviews</Nav.Link>

                 </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
}
