import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // Container,
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
                {/* <Container> */}
                    <NavbarBrand className="link2" href="/">Lucy Lane</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1" to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1" to="/shows">
                                    Upcoming Shows
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1"to="/artists">
                                    Our Artists
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1" to="/press">
                                    Press
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1" to="/directions">
                                    Directions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{fontWeight: "bold", color: "red"}}className="link1" to="/form">
                                    Contact Us
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
        </nav>
     );
    }
}
export default NavBar;