const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    name: {
        type: String,
         required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
         required: false
    },
    location: {
        type: String,
        required: false
    },
    availability: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    fblink: {
        type: String,
        required: false
    },
    epklink: {
        type: String,
        required: false
    },
    coolstuff: {
        type: String,
        required: false
    }    

    
});

module.exports = Artist = mongoose.model('artistModel', ArtistSchema);
