var methodOverride  = require("method-override"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    express         = require("express"),
    app             = express(),
    getMovies       = require("./movieData");

// Database Connection
mongoose.connect("mongodb://localhost/movie_web_reservation", { useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false });

// Models configuration
var Movie       = require("./models/movie"),
    Schedule    = require("./models/schedule");
    Reservation = require("./models/reservations");

// APP configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
getMovies();

// ROOT ROUTE
app.get("/", function(req, res) {
    res.render("/movies"); 
});

// INDEX ROUTE
app.get("/movies", function(req, res) {
    Movie.find({}, function(err, movies) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {movies: movies});
        }
    });
});

// SHOW ROUTE - reservation page
app.get("/movies/:id", function(req, res) {
    Movie.findById(req.params.id, function(err, foundMovie) {
        if (err) {
            res.redirect("/movies");
        } else {
            Schedule.find({movie:foundMovie._id}, function(err, foundSched){
                res.render("reservation", {movie:foundMovie, schedules:foundSched});
            });
        }
    });
});

//seats page
app.get("/movies/seats/:id", function(req, res) {
    Schedule.findById(req.params.id, function(err, foundSched) {
        if(err) {
            console.log(err);
        } else {
            //res.render("seat_selection", {foundSched:foundSched});
            Reservation.find({schedId:foundSched._id}, function(err, foundRes){
                res.render("seat_selection", {foundSched:foundSched, reservations: foundRes});
            });
        }
    });
});

//reservations page
app.post("/movies/seats/reservations/:sched_id", function(req, res) {
    var get_seats;
    var selected =  req.body.res_area;

    Schedule.findById(req.params.sched_id, function(err, foundSched) {
        if(err) {
            console.log(err);
        } else {
            Movie.findById(foundSched.movie, function(err, foundMovie) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(foundSched);
                        console.log(foundMovie);
                        
                        Reservation.create({
                            schedId: foundSched._id,
                            title: foundMovie.title,
                            schedule: foundSched.sched,
                            seats: selected.split(","),
                            cinemaNo: foundSched.cinema,
                            quantity: selected.split(",").length,
                            price: foundSched.price,
                            totalPrice: selected.split(",").length * foundSched.price

                        }, function(err, reserve) {
                            if(err) {
                                console.log(err);
                            } else {
                                res.render("checkout", {foundSched:foundSched, foundMovie: foundMovie, get_seats: req.body.res_area});
                            }
                        });
                    }
            });
        }
    });
});


//dashboard page
app.get("/movies/seats/reservations/dashboard", function(req, res) {
    Reservation.find({}, function(err, reserve) {
        if(err) {
            console.log(err);
        } else {
            res.render("dashboard", {reserve:reserve});
            console.log(reserve);
        }
    });

});


//delete reservation
app.delete("/deleteRes/:id", function(req,res){
    Reservation.findByIdAndRemove(req.params.id, function(err, deleteReservatin){
        if(err){
            res.redirect("/movies/seats/reservations/dashboard");
        } else {
            res.redirect("/movies/seats/reservations/dashboard");
        }
    });
});

//localhost
app.listen(3000, process.env.IP, function() {
   console.log("***** Server has started on port 3000. *****");
});