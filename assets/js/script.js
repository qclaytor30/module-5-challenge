
var currentTime = moment();
var currentHour = parseInt(currentTime.format('H'));
// Display current date at top of page
var currentDayEl = $('#currentDay');
var currentDay = currentTime.format('dddd, MMMM Do');
currentDayEl.text(currentDay);

// Set color of timeslot based on current time
var descriptionEls = $('.description');

for (var i = 0; i < descriptionEls.length; i++) {
    var descriptionEl = descriptionEls[i];
    var rowHour = parseInt(descriptionEl.dataset.hour);
    if (rowHour < currentHour) {
        descriptionEl.classList.add("past");
    } else if (rowHour === currentHour) {
        descriptionEl.classList.add("present");
    } else if (rowHour > currentHour) {
        descriptionEl.classList.add("future");
    };
}


// add local storage save button
function saveEvent(event) {
    var buttonClicked = $(event.target);

    var selectedTimeBlock = buttonClicked.closest('.time-block');
    var selectedTimeblockTextarea = selectedTimeBlock.children('textarea');
        var eventID = selectedTimeblockTextarea.attr("id");
        var eventDescription = selectedTimeblockTextarea.val();

        localStorage.setItem(eventID, JSON.stringify(eventDescription));

        var messageEl = $('#message');
        messageEl.text('Task saved to local storage.');
    }
        var saveButtons = $('.fas');
        saveButtons.on('click', saveEvent);
    
    // check local storage for events when page loads
    function showSavedEvents() {
        for (var i = 0; i < descriptionEls.length; i++) {
            var descriptionEl = descriptionEls[i];
            var descriptionID = descriptionEl.id;
            var savedDescription = JSON.parse(localStorage.getItem(descriptionID));
            if (savedDescription !==null){
                descriptionEl.textContent = savedDescription;
            }
        }
    }

    window.onload = showSavedEvents(); 
// at the end of day clear local storage to start new
    function clearLocalStorage() {
        if (currentHour >= 18 || currentHour < 9) {
            localStorage.clear();
        }
    }
    clearLocalStorage();