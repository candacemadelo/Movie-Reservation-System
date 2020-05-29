
$('.input_class_checkbox').each(function(){
    $(this).hide().after('<div class="seat" />');
});

$('.class_checkbox').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});


//variables for seat
var reserveSeat = $("#select_seatarea");
var disableSeat = $("#select_seats").val();
var seat = disableSeat.split(",");
var selectSeats = [];

// get the value of the checked seat
$("td input[type=checkbox]").on("click", function() {
    if(this.checked) {
        selectSeats.push($(this).val()); 
    } else {
        selectSeats = selectSeats.filter(seat => seat !== ($(this).val()));
    }

    $("#select_seatarea").val(selectSeats.toString());

});

//disable seats
for(var i = 0 ; i < seat.length; i++) {
    $("#"+seat[i].trim()).prop("disabled", true);
}


//check whether the form is empty or not. if empty disable button
function success() {
    var checkArea = document.getElementById("select_seatarea");
    var confirmButton = document.getElementById("confirm_seat");

    if(checkArea.value === "") {
        confirmButton.disabled = true;
    } else {
        confirmButton.disabled = false;
    }
}

