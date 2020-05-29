var mongoose = require("mongoose"),
    request = require("request"),
    Movie   = require("./models/movie"),
    Schedule = require("./models/schedule");

// time and date format
function convertTimeAndDate(data) {
  var date = new Date(data);
  // get the date as a string
  var getDate = date.toDateString();
  // get the time as a string
  var getTime = date.toLocaleTimeString();

  return getDate +  " " + getTime;
}

// handle float numbers
function intToFloat(num) {
    return num.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2});
}

//seeding data to db
function getMovies() {
  Movie.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Removed movies!");

      //wonder woman
      var url ="http://www.omdbapi.com/?t=" + "wonder+woman" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 10:30:00";
          var date2 = "May 22 2020 14:30:00";
          
          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 2,
            price:intToFloat("220.00")
          }, 
           {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 3,
            price: intToFloat("350.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });

      //avengers
      var url ="http://www.omdbapi.com/?t=" + "avengers" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 9:45:00";
          var date2 = "May 23 2020 14:40:00";
          var date3 = "May 23 2020 16:15:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 2,
            price: intToFloat("180.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 3,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 4,
            price: intToFloat("575.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });

       //the great gatsby
      var url ="http://www.omdbapi.com/?t=" + "the+great+gatsby" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 8:45:00";
          var date2 = "May 23 2020 12:40:00";
          var date3 = "May 23 2020 15:15:00";
          var date4 = "May 24 2020 17:20:00"

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 1,
            price: intToFloat("250.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 2,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 4,
            price: intToFloat("450.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date4),
            cinema: 1,
            price: intToFloat("360.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });


       //joker
      var url ="http://www.omdbapi.com/?t=" + "joker" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 10:45:00";
          var date2 = "May 23 2020 13:35:00";
          var date3 = "May 23 2020 15:25:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 1,
            price: intToFloat("180.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 2,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 3,
            price: intToFloat("545.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });

       //to all the boys
      var url ="http://www.omdbapi.com/?t=" + "to+all+the+boys+i've+loved+before" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 23 2020 12:45:00";
          var date2 = "May 24 2020 14:50:00";
          var date3 = "May 24 2020 16:15:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 1,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 2,
            price: intToFloat("450.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 4,
            price: intToFloat("575.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });

      //avengers infinity war
      var url ="http://www.omdbapi.com/?t=" +  "avengers+:+infinity+war" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 9:15:00";
          var date2 = "May 23 2020 12:45:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 2,
            price: intToFloat("350.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 4,
            price: intToFloat("575.00")
          },  function(err, sched){
            mov.save();
          });
        });
      });


       //batman returns
      var url ="http://www.omdbapi.com/?t=" + "batman+returns" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 22 2020 10:20:00";
          var date2 = "May 23 2020 12:50:00";
          var date3 = "May 24 2020 14:15:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 1,
            price: intToFloat("180.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 3,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 4,
            price: intToFloat("355.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });


      //captain marvel
      var url ="http://www.omdbapi.com/?t=" + "captain+marvel" + "&plot=full&apikey=14ea4012";
      request(url, function(error, response, body){
        var data = JSON.parse(body);
        Movie.create({
          title: data["Title"],
          image: data["Poster"],
          genres: data["Genre"].split(","),
          rating: data["Rating"],
          runtime: data["Runtime"],
          synopsis: data["Plot"]
        }, function(err, mov){

          var date1 = "May 23 2020 10:00:00";
          var date2 = "May 24 2020 13:35:00";
          var date3 = "May 24 2020 15:40:00";

          Schedule.create(
          {
            movie: mov._id,
            sched: convertTimeAndDate(date1),
            cinema: 2,
            price: intToFloat("180.50")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date2),
            cinema: 2,
            price: intToFloat("275.00")
          }, 
          {
            movie: mov._id,
            sched: convertTimeAndDate(date3),
            cinema: 4,
            price: intToFloat("450.00")
          }, function(err, sched){
            mov.save();
          });
        });
      });

    }
  });

}
         
module.exports = getMovies;


