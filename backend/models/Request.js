var mongoose = require('mongoose');

const ConnReq = new mongoose.Schema({
    mail: String,
    msg: String
})

const ConnModel = mongoose.model("Connection_request", ConnReq)

module.exports = ConnModel;