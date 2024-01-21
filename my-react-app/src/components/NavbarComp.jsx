import React, {Component} from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Navbar.css'; // Import the CSS file

export default class NavbarComp extends Component {
 render(){
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                
                <Container>
                <Navbar.Brand href="#home" className="navbrand">Chakraless</Navbar.Brand>
                 <Nav className="justify-content-end" style={{width: "100%"}}>
                    <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#features">About</Nav.Link>
                    <Nav.Link className="nav-link" href="#pricing">Projects</Nav.Link>
                 </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
}
