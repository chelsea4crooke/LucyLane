const express = require('express');
const router = express.Router();

//Item Model
const Artist = require('../../models/artistform');



router.post('/', (req, res) =>{
    const newArtist = new Artist({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        availability: req.body.availability,
        genre: req.body.genre,
        fblink: req.body.fblink,
        epklink: req.body.epklink,
        coolstuff: req.body.coolstuff

        
    });
    newArtist.save().then( artist => res.json(artist));
    console.log("artist route")
});

module.exports = router;
