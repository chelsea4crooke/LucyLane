import React, { Component } from "react";
import {
    Button, 
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import { addContact } from '../actions/contactActions';


// container- a modal that is connected to redux

class ItemModal extends Component {
    state={
        name:','
    };

    onSubmit = e => {
        e.preventDefault();
        const newContact = {
            name: this.state.name
        }
        //ADDITEM via addItem action
        this.props.addContact(newContact);
        //close modal
        this.toggle();
    };

    render() {
        return(
            <div>

                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="item"> Item
                            <Input
                            type="text"
                            name="name"//state name
                            id="contact"
                            placeholder="Add contact"
                            onChange={this.onChange}
                            ></Input>
                            <Button
                            color="dark"
                            style={{marginBottom:'2rem'}}
                            block>
                                Add Contact
                            </Button>
                        </Label>
                    </FormGroup>
                </Form>
                    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    contact: state.contact
});
// redux use connect and component name in second paren
export default connect(mapStateToProps, { addContact })(ItemModal)