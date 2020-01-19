import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Col
} from 'reactstrap';

class navbar extends Component{
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
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Lucy Lane</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="client\src\components\about\About.js">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="client\src\components\shows\Shows.js">
                                    Upcoming Shows
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="client\src\components\directions\Directions.js">
                                    Directions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="client\src\components\form\Form.js">
                                    Contact Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="client\src\components\artists\ShoppingList.js">
                                    Our Artists
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
      
     );
    } 
}

export default navbar;