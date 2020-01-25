

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
import { addArtist } from '../../actions/artistActions';



class Artist extends Component {
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
        const newArtist = {
            name: this.state.name,
            email: this.state.email,
            topic: this.state.topic,
            text: this.state.text,
            
        }
        console.log(newArtist)
        //ADDITEM via addItem action
        this.props.addArtist(newArtist);
        
    };

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                            <Label for="name"> Artist Name
                            <Input type="text" name="name" id="contact" placeholder="Artist Name" onChange={this.onChange}/>

                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="yourname@you.com" onChange={this.onChange}/>

                            

                            <Label for="topic">What are you contacting us about?</Label>
                            <Input type="text" name="topic" id="email" placeholder="Directions to shows, Press, etc." onChange={this.onChange}/>

                          <FormGroup>
                            <Label for="exampleText">Please Leave a detailed message below and we will do our best to respond within 2 days.</Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={this.onChange}/>
                          </FormGroup>
                            
                            <Button
                            

                            color="dark"
                            style={{marginBottom:'2rem'}}
                            block>
                                Add Artist
                            </Button>
                        </Label>
                    </FormGroup>
                </Form>
                    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.artist
});
// redux use connect and component name in second paren
export default connect(mapStateToProps, { addArtist })(Artist)
