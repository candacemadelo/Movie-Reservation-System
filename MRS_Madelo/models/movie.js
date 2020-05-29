var mongoose = require("mongoose");

// MOVIES SCHEMA + MODEL
var movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    genres: [String],
    rating: String,
    runtime: String,
    synopsis: String
});

module.exports = mongoose.model("Movies", movieSchema);