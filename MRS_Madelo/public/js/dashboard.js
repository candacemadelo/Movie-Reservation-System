// loads reservations into page
function initDashboardInfo() {
    "use strict";
    var storedReservations = JSON.parse(localStorage.getItem("reservation")),
        reservationsTable = document.getElementById("reservations"),
        resCounter = document.getElementById("resCounter"),
        i,
        count = storedReservations.length;
    
    updateResCounter(count);
    
    for (i = 0; i < storedReservations.length; i++) {
        
        reservationsTable.innerHTML += '<tr id="' + storedReservations[i].resId + 
                                    '"><td>' + storedReservations[i].title +
									'</td><td>' + storedReservations[i].schedule +
									'</td><td>' + storedReservations[i].cinemaNum +
									'</td><td>' + '<button type="button" class="btn btn-success text-white" data-toggle="modal" data-target="#detailsModal" onclick="getReservationId(this.parentElement.parentElement.id)">Details</button></td></tr>';
    }
}

// stores ID of selected reservation
function getReservationId(resId) {
    "use strict";
    
    if (!sessionStorage.getItem("tempRes")) {
        sessionStorage.setItem("tempRes", resId);
    } else {
        sessionStorage.removeItem("tempRes");
        sessionStorage.setItem("tempRes", resId);
    }
}

// adds leading zeros to number
function zeroPad(num, targetLength) {
    "use strict";
    
    var zero = targetLength - num.toString().length + 1;
    
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function updateResCounter(count) {
    if (count > 1) {
        resCounter.innerHTML = "Hi, there! You have " + count + " reservations."
    } else {
        resCounter.innerHTML = "Hi, there! You have " + count + " reservation."
    }
}
// loads info of selected reservation into modal
function loadModalData() {
    "use strict";
    
    var tempResId = sessionStorage.getItem("tempRes"),
        storedReservations = JSON.parse(localStorage.getItem("reservation")),
        title = document.getElementById("movieTitle"),
        transactionNum = document.getElementById("transacNum"),
        admissionQty = document.getElementById("admissions"),
        seats = document.getElementById("seats"),
        totalAmt = document.getElementById("total"),
        reservationId,
        i;
    
    
    for (i = 0; i < storedReservations.length; i++) {
        if (storedReservations[i].resId === tempResId) {
            
            // reservationId = storedReservations[i].resId;
            
            title.innerHTML = storedReservations[i].title;
            transactionNum.innerHTML = storedReservations[i].resId;
            admissionQty.innerHTML = storedReservations[i].quantity;
            seats.innerHTML = storedReservations[i].reservedSeats;
            totalAmt.innerHTML = "Php " + storedReservations[i].totalPrice;
        }
    }
}   

// execute loadModalData() upon opening of modal
$(document).ready(function(){
  $("#detailsModal").on('show.bs.modal', function(){
      
  });
});

// sets status of reservation to cancelled
function cancelReservation() {
    "use strict";
    var tempResId = sessionStorage.getItem("tempRes"),
        storedReservations = JSON.parse(localStorage.getItem("reservation")),
        row = document.getElementById(tempResId),
        i;

    for (i = 0; i < storedReservations.length; i++) {
        if (storedReservations[i].resId === tempResId) {
            storedReservations.splice(i, 1);
            localStorage.setItem("reservation", JSON.stringify(storedReservations));
            break;
        }
    }
    
    row.parentNode.removeChild(row);
    updateResCounter(storedReservations.length); 
}