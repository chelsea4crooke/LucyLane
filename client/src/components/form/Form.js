

// import "./style.css";
import React, { Component } from "react";
import {
    Button, 
    Form,
    FormGroup,
    Label,
    Input,
    
} from 'reactstrap';
import {connect} from 'react-redux';
import { addContact } from '../../actions/contactActions';


// container- a modal that is connected to redux

class ItemModal extends Component {
    state={
        name:'',
        email:'',
        directions: '',
        questions: '',
        other: '',
        text: '',
    };

    onSubmit = e => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            directions: this.state.directions,
            questions: this.state.questions,
            other: this.state.other,
            text: this.state.text,

        }
        //ADDITEM via addItem action
        this.props.addContact(newContact);
       
        
    };

    render() {
        return(
            <div>

                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name"> Name
                            <Input
                            type="text"
                            name="name"//state name
                            id="contact"
                            placeholder="Add contact"
                            onChange={this.onChange}
                            ></Input>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="yourname@you.com" />
                            <FormGroup tag="fieldset">
                            <legend>What are you contacting us about?</legend>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Directions and/or show information
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" name="questions" />{' '}
                                Questions and Concerns
                              </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                              <Label check>
                                <Input type="radio" name="other"  />{' '}
                                Other
                              </Label>
                            </FormGroup>
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                          </FormGroup>
                            {/* Submit Button */}
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
// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: "",
//     password: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 15);
//     }
//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Fill out your first and last name please!");
//     } else if (this.state.password.length < 6) {
//       alert(
//         `Choose a more secure password ${this.state.firstName} ${this.state
//           .lastName}`
//       );
//     } else {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     }

//     this.setState({
//       firstName: "",
//       lastName: "",
//       password: ""
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
      
//         <p>
//           Hello {this.state.firstName} {this.state.lastName}
//         </p>
//         <form className="form">
//           <input
//             value={this.state.firstName}
//             name="firstName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             value={this.state.lastName}
//             name="lastName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Last Name"
//           />
//           <input
//             value={this.state.password}
//             name="password"
//             onChange={this.handleInputChange}
//             type="password"
//             placeholder="Password"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
