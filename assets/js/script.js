// Display current date at top of page
var currentTime = moment();
var currentDateEl = $('#currentDate');
var currentDate = currentTime.format("dddd, MMM Do");
currentDateEl.text(currentDate);

// time-slot color
var descriptionEls = $('.description');
var currentHour = parseInt(currentTime.format('H'));

for (var i = 0; i < descriptionEl.length; i++) {
    var descriptionEl = descriptionEls[i];
    var rowHour = parseInt(descriptionEl.dataset.hour);
    //console.log(rowHour);
    //console.log(currentHour);
if (rowHour < currentHour) {
    descriptionEl.addClass('past');
}
else if (rowHour === currentHour) {
    descriptionEl.addClass('present');
    //console.log("present");
}
else if (rowHour > currentHour) {
    descriptionEl.addClass('future');
    //console.log("future");
};
    }



