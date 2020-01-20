
import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Col
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
export class NavBar extends Component{
     state ={
         isOpen: false
     }
     toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
          <nav>
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Lucy Lane</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/shows">
                                    Upcoming Shows
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/directions">
                                    Directions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/form">
                                    Contact Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/artists">
                                    Our Artists
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        </nav>
     );
    }
}
export default NavBar;