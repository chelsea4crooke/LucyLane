const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    name: {
        type: String,
         required: false
    },
    email: {
        type: String,
        required: false
    },
    topic: {
        type: String,
         required: false
    },
    text: {
        type: String,
        required: false
    }
});

module.exports = Artist = mongoose.model('artist model', ArtistSchema);