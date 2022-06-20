const mongoose = require("mongoose");

const kunSchema = new mongoose.Schema({});

const Kun = mongoose.model("data", kunSchema);

module.exports = Kun;
