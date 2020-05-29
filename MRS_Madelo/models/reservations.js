var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
	schedId :{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Schedule"
	},
	title: String,
    schedule: String,
    seats: Array, 
    cinemaNo: Number,
    quantity: Number,
    price: Number,
    totalPrice: Number
});

module.exports = mongoose.model("Reservations", reservationSchema);