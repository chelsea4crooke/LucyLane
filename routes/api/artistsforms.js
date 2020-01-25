const express = require('express');
const router = express.Router();

//Item Model
const Artist = require('../../models/artistform');



router.post('/', (req, res) =>{
    const newArtist = new Artist({
        name: req.body.name,
        email: req.body.email,
        topic: req.body.topic,
        text: req.body.text
        
    });
    newArtist.save().then( artist => res.json(artist));
    console.log("artist route")
});

module.exports = router;
