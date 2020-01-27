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

<<<<<<< HEAD
module.exports = Artist = mongoose.model('artist', ArtistSchema);
=======
module.exports = Artist = mongoose.model('artistModel', ArtistSchema);
>>>>>>> 6613f203bd76d93d455540243e278bafd6ff9c83
