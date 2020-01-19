import React, { Component } from "react";
import {
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import { addItem } from '../actions/itemActions';


// container- a modal that is connected to redux

class ItemModal extends Component {
    state={
        modal: false,
        name: '',
    }
    toggle =() => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        //ADDITEM via addItem action
        this.props.addItem(newItem);
        //close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}
                >Add Item
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item"> Item
                                    <Input
                                    type="text"
                                    name="name"//state name
                                    id="item"
                                    placeholder="Add Shopping Item"
                                    onChange={this.onChange}
                                    ></Input>
                                    <Button
                                    color="dark"
                                    style={{marginBottom:'2rem'}}
                                    block>
                                        Add Item
                                    </Button>
                                </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});
// redux use connect and component name in second paren
export default connect(mapStateToProps, { addItem })(ItemModal)