const mongoose = require("mongoose")

const acmeSchema = new mongoose.Schema({
	firstName: String,
    middleName: String,
    lastName: String,
    id: Number,
    email: String,
    password: String
});

const Acme = mongoose.model("acme", acmeSchema);

module.exports = Acme;