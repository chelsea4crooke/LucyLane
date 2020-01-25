

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
import "../form/contact.css";



class Artist extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        location: '',
        availability: '',
        genre: '',
        fblink: '',
        epklink: '',
        coolstuff: ''
    };

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      this.setState({ [e.target.email]: e.target.value });
      this.setState({ [e.target.phone]: e.target.value });
      this.setState({ [e.target.location]: e.target.value });
      this.setState({ [e.target.availability]: e.target.value });
      this.setState({ [e.target.genre]: e.target.value });
      this.setState({ [e.target.fblink]: e.target.value });
      this.setState({ [e.target.epklink]: e.target.value });
      this.setState({ [e.target.coolstuff]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newArtist = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            availability: this.state.avaiability,
            genre: this.state.genre,
            fblink: this.state.fblink,
            epklink: this.state.epklink,
            coolstuff: this.state.coolstuff,           
        }
        console.log(newArtist)
        //ADDITEM via addItem action
        this.props.addArtist(newArtist);
        
    };

    render() {
        return(
            <main className="formBody">
            <br/>
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name" className="name">Artist Name</Label>
                            <Input type="text" name="name" id="artistname" placeholder="Artist Name" onChange={this.onChange}/>

                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="yourname@you.com" onChange={this.onChange}/>

                            <Label for="phone"> Phone</Label>
                            <Input type="text" name="phone" id="phone" placeholder="ArtistPhone" onChange={this.onChange}/>
 
                            <Label for="location"> Home Location</Label>
                            <Input type="text" name="location" id="location" placeholder="Home Location" onChange={this.onChange}/>

                            <Label for="availability"> Availability</Label>
                            <Input type="text" name="availability" id="availability" placeholder="Availability" onChange={this.onChange}/>
                            
                            <Label for="genre">Genre>
                            <Input type="text" name="genre" id="genre" placeholder="Genre" onChange={this.onChange}/>

                            <Label for="fblink">Facebook Link</Label>
                            <Input type="text" name="fblink" id="fblink" placeholder="facebook link" onChange={this.onChange}/>

                            <Label for="epklink">EPK Link</Label>
                            <Input type="text" name="epklink" id="epklink" placeholder="epk link" onChange={this.onChange}/>

                          <FormGroup>
                            <Label for="coolstuff">Tell us something cool about yourself.</Label>
                            <Input type="textarea" name="coolstuff" id="coolstuff" onChange={this.onChange}/>
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
              <br/>         
            </main>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.artist
});
// redux use connect and component name in second paren
export default connect(mapStateToProps, { addArtist })(Artist)
