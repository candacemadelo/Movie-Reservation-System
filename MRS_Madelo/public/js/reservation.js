//global variable
// var reserveInfo = [];

// stores ID of selected movie
function getMovieId(movieId) {
    "use strict";
    if (!sessionStorage.getItem("tempMovie")) {
        sessionStorage.setItem("tempMovie", movieId);
    } else {
        sessionStorage.removeItem("tempMovie");
        sessionStorage.setItem("tempMovie", movieId);
    }
}

// stores ID of selected schedule
function getSchedId(schedId) {
    "use strict";
    if (!sessionStorage.getItem("tempSched")) {
        sessionStorage.setItem("tempSched", schedId);
    } else {
        sessionStorage.removeItem("tempSched");
        sessionStorage.setItem("tempSched", schedId);
    }
}

// adds leading zeros to number
function zeroPad(num, targetLength) {
    "use strict";
    
    var zero = targetLength - num.toString().length + 1;
    
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function playTrailer() {
    "use strict";
    var movieId = sessionStorage.getItem("tempMovie"),
        video = document.getElementById("trailerFrame");
    
    switch (movieId) {
        case 'movie1': // Aladdin
            video.src = "https://www.youtube.com/embed/foyufD52aog";
            break;
        
        case "movie2": // Cinderella
            video.src = "https://www.youtube.com/embed/20DF6U1HcGQ";
            break;
            
        case "movie3": // The Greatest Showman
            video.src = "https://www.youtube.com/embed/AXCTMGYUg9A";
            break;
            
        case "movie4": // Mulan
            video.src = "https://www.youtube.com/embed/KK8FHdFluOQ";
            break;
            
        case "movie5": // The Avengers
            video.src = "https://www.youtube.com/embed/eOrNdBpGMv8";
            break;
            
        case "movie6": // The Avengers: Age of Ultron
            video.src = "https://www.youtube.com/embed/tmeOjFno6Do";
            break;
            
        case "movie7": // The Avengers: Infinity War
            video.src = "https://www.youtube.com/embed/6ZfuNTqbHE8";
            break;
            
        case "movie8": // The Avengers: Endgame
            video.src = "https://www.youtube.com/embed/TcMBFSGVi1c";
            break;
            
        default: // amazeballs
            video.src = "https://www.youtube.com/embed/fK9xd2GFygY?start=19";
            break;
    }
    
}

function pauseVid() { 
    var vid = document.getElementById("trailerFrame");
  vid.pause(); 
} 

//$("#trailerModal").on('hidden.bs.modal', function (e) {
//    pauseVid()
////    $('video').trigger('pause');
////    $("#trailerModal iframe").attr("src", $("#trailerModal iframe").attr("src"));
////    $('#trailerModal .modal-body').empty();
////    $('#trailerModal iframe').attr('src', '');
////    $("#trailerModal iframe").attr("src", $("#trailerModal iframe").attr("src"));
//});

$(document).ready(function(){
  $("#trailerModal").on('hidden.bs.modal', function(){
      pauseVid();
  });
});

// execute playTrailer() upon opening of modal
$(document).ready(function(){
  $("#trailerModal").on('show.bs.modal', function(){
      playTrailer();
  });
});



// loads movie info into page
function initMovieInfo() {
    "use strict";
    
    playTrailer();
    
    var movieTitle = document.getElementById("movieTitle"),
        info = document.getElementById("subInfo"),
        synopsis = document.getElementById("movieSynopsis"),
        poster = document.getElementById("moviePoster"),
        schedTable = document.getElementById("schedules"),
        storedMovies = JSON.parse(localStorage.getItem("movies")), // stores all data from "movies"
        storedSchedules = JSON.parse(localStorage.getItem("schedules")), // stores all data from "schedules"
        movieId = sessionStorage.getItem("tempMovie"), // retrieves movie ID passed from index.html
        i,
        j,
        count = 0,
        startTime = "10:00 AM",
        infoStr,
        timeStr;
    
    // fill movie info into page elements
    for (i = 0; i < storedMovies.length; i++) {
        
        // find movie based on passed ID
        if (storedMovies[i].movie_id === movieId) {
            movieTitle.innerHTML = storedMovies[i].title;
            infoStr = storedMovies[i].rating + " | " + storedMovies[i].runtime;
            info.innerHTML = infoStr;
            synopsis.innerHTML = storedMovies[i].synopsis;
            poster.src = storedMovies[i].poster;
        }
    }
    
    // fill schedules of selected movie into table element
    for (j = 0; j < storedSchedules.length; j++) {

        if (storedSchedules[j].movie_id === movieId) {
            
            timeStr = startTime + " - " + storedSchedules[j].end_time;
            
            schedTable.innerHTML += '<tr><td>' + (++count) +
                                    '</td><td>' + storedSchedules[j].date +
									'</td><td>' + timeStr +
									'</td><td>' + storedSchedules[j].cinema +
									'</td><td>' + storedSchedules[j].price +
									'</td><td>' + '<a href="seat_selection.html"><button type="button" class="btn btn-success text-white" id="' + storedSchedules[j].sched_id + '" onclick="getSchedId(this.id)">Select</button></a></td></tr>';
        }
    }
}



function checkoutInfo() {
    "use strict";
    
    var storeMovies = JSON.parse(localStorage.getItem("movies")), // stores all data from "movies"
        storeSchedules = JSON.parse(localStorage.getItem("schedules")), // stores all data from "schedules"
        storedReservations = JSON.parse(localStorage.getItem("reservation")) || [],
        storeSeats = JSON.parse(localStorage.getItem("seats")),
        schedId = sessionStorage.getItem("tempSched"),
        title = document.getElementById("movieTitle"),
        schedule = document.getElementById("sched"),
        cinema = document.getElementById("cinemaNum"),
        seat = document.getElementById("resSeat"),
        quantity = document.getElementById("numOfSeats"),
        total = document.getElementById("price"),
        overall = document.getElementById("priceTotal"),
        transactionNum = document.getElementById("trans_num"),
        startTime = "10:00 AM",
        lastId = "",
        i, j, k,
        reservedQty, reserveInfoInit = [], reserveInfo;

        //storing the info of reservations
        if (!localStorage.getItem("reservation")) {
            localStorage.setItem("reservation", JSON.stringify(reserveInfo));
        }
    
    // lastId = storedReservations[--storedReservations.length].resId;
    
    //     reservedQty = storedReservations.length;
    // alert(reservedQty);

        if(storedReservations == null) {
            lastId = 0;
        } else {
            for(var i = 0; i < storedReservations.length; i++) {
                lastId = storedReservations[i].resId;
            }
        }

        for(i = 0; i < storeSchedules.length; i++) {
            if(storeSchedules[i].sched_id === schedId) {
                for(j = 0; j < storeMovies.length; j++) {
                    for(k = 0; k < storeSeats.length; k++) {
                        if(storeSchedules[i].movie_id === storeMovies[j].movie_id) {
                            reserveInfo = 
                                {   
                                    resId: transactionNum.innerHTML = zeroPad((++lastId), 5),
                                    title: title.innerHTML = storeMovies[j].title,
                                    schedule:  schedule.innerHTML = storeSchedules[i].date + " " + startTime + " - " + storeSchedules[i].end_time,
                                    cinemaNum: cinema.innerHTML = storeSchedules[i].cinema,
                                    reservedSeats: seat.innerHTML = storeSeats[k].seat,
                                    quantity: quantity.innerHTML = storeSeats[k].seat.length,
                                    totalPrice:  total.innerHTML =  storeSeats[k].seat.length * storeSchedules[i].price,
                                    status: "Active"
                                };

                            //console.log(reserveInfo);
                            // for displaying the overall total(no need to append data to local storage since totalprice == to the overall)
                            //for printing purposes only sa checkout info
                            overall.innerHTML = storeSeats[k].seat.length * storeSchedules[i].price; 

                            storedReservations.push(reserveInfo);
                            // console.log(storedReservations);
                            localStorage.setItem("reservation", JSON.stringify(storedReservations));
                        }
                                
                    }
                }
            }
        }
}

