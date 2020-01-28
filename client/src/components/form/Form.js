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
import "./contact.css";
import Jumbotron from '../Jumbotron';



class Contact extends Component {
    state={
        name:'',
        email:'',
        topic:'',
        text: '',
    };

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      this.setState({ [e.target.email]: e.target.value });
      this.setState({ [e.target.topic]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            topic: this.state.topic,
            text: this.state.text,
            
        }
        console.log(newContact)
        //ADDITEM via addItem action
        this.props.addContact(newContact);
        e.target.reset();
    };

    render() {
  
        return(
        <main className="formBody">
            <Jumbotron>
                <p className="lead">If you have any questions or would just like to say 'hi', please fill out the form below.</p>
                  <p className="lead">If you are a band or artist interested in performing at Lucy Lane, fill out <a className="formLink" href="artistform">this form</a>!</p>
            </Jumbotron>

        <br/>
            <div className="container">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                            <Label for="name" className="name"> Name
                            <Input type="text" name="name" className="contact" placeholder="" onChange={this.onChange}/>

                            <Label for="email" className="email">Email</Label>
                            <Input type="text" name="email" className="email" placeholder="yourname@you.com" onChange={this.onChange}/>

                            

                            <Label for="topic" className="topic">What are you contacting us about?</Label>
                            <Input type="text" name="topic" className="email" placeholder="Directions to shows, Press, etc." onChange={this.onChange}/>

                          <FormGroup>
                            <Label for="exampleText" className="exText">Please Leave a detailed message below and we will do our best to respond within 2 days.</Label>
                            <Input type="textarea" name="text" className="exampleText" onChange={this.onChange}/>
                          </FormGroup>
                            
                            <Button
                            color="dark"
                            style={{marginBottom:'2rem'}}
                            block>
                                Submit
                            </Button>
                        </Label>
                    </FormGroup>
                </Form>

                </div>
              <br/>         
            </main>
        );
    }
}
console.log("Form.js --:");
const mapStateToProps = state => ({

    contact: state.contact
});
// redux use connect and component name in second paren
export default connect(mapStateToProps, { addContact })(Contact)
