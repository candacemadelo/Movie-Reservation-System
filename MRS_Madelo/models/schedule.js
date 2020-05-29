var mongoose = require("mongoose");

// SCHEDULES SCHEMA + MODEL
var scheduleSchema = new mongoose.Schema({
	movie: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Movie"
	},
    sched: String,
    cinema: String,
    price: Number
});

module.exports = mongoose.model("Schedule", scheduleSchema);