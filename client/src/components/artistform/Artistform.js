// import "./style.css";
import React, { Component } from "react";
import {
    Button, 
    Form,
    FormGroup,
    Label,
    Input,
} 
from 'reactstrap';
import {connect} from 'react-redux';
import { addArtist } from '../../actions/artistActions';
import "../artistform/artForm.css";

export class Artist extends Component {
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
        };
        
        //ADDITEM via addItem action
        this.props.addArtist(newArtist);
        e.target.reset();
    };

    render() {
        return(
            <main className="artBody">
            <br/>
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name" className="name">Artist Name</Label>
                            <Input type="text" name="name" className="artistname" placeholder="Artist Name" onChange={this.onChange}/>

                            <Label for="email" className="email">Email</Label>
                            <Input type="text" name="email" className="email" placeholder="yourname@you.com" onChange={this.onChange}/>

                            <Label for="phone" className="phone">Phone</Label>
                            <Input type="text" name="phone" className="phone" placeholder="Artist Phone" onChange={this.onChange}/>
 
                            <Label for="location" className="location">Home Location</Label>
                            <Input type="text" name="location" className="location" placeholder="Home Location" onChange={this.onChange}/>

                            <Label for="availability" className="avail">Availability</Label>
                            <Input type="text" name="availability" className="availability" placeholder="Availability" onChange={this.onChange}/>
                            
                            <Label for="genre" className="genre">Genre</Label>
                            <Input type="text" name="genre" className="genre" placeholder="Genre" onChange={this.onChange}/>

                            <Label for="fblink" className="fblink">Facebook Link</Label>
                            <Input type="text" name="fblink" className="fblink" placeholder="Facebook Link" onChange={this.onChange}/>

                            <Label for="epklink" className="epk">EPK Link</Label>
                            <Input type="text" name="epklink" className="epklink" placeholder="EPK Link" onChange={this.onChange}/>

                          <FormGroup>
                            <Label for="coolstuff" className="cool">Tell us something cool about yourselves.</Label>
                            <Input type="textarea" name="coolstuff" className="coolstuff" onChange={this.onChange}/>
                          </FormGroup>
                            <Button
                            color="dark"
                            style={{marginBottom:'2rem'}}
                            block>
                                Add Artist
                            </Button>
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
