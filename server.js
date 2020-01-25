const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const contacts = require('./routes/api/forms');
const artists = require('./routes/api/artistsforms');
const app = express();

app.use(bodyParser.json());

//DB Config

const db = require('./config/keys').mongoURI;

//COnnect to Mongo

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/items', items);

app.use('/api/forms', contacts);

//serve static assets if in production

if (process.env.NODE_ENV === 'production') {
//set static folder
app.use(express.static('client/build'));

app.get('*', (req,res) => {
 res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`));