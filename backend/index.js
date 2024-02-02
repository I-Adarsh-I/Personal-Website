var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var ConnModel = require('./models/Request')

const PORT = 5000;
const URL = "mongodb://localhost:27017/Let's_connect"

const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect(URL)

app.post('/connect', async(req, res) => {
    try {
        await ConnModel.create(req.body);

    } catch (err) {
        console.error("Error sending data to MDB: ", err);
    }
})

app.listen(PORT, () => {
    console.log('Server has started on port: ', PORT);
} )

