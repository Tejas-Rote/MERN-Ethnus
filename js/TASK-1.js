function showDate() {
    var currentDate = new Date();
    var dateParagraph = document.getElementById("dateParagraph");
    dateParagraph.textContent = currentDate.toDateString();
}

function showDateTime() {
    var date = new Date();
    var day = date.toLocaleDateString(undefined, { weekday: 'long' });
    var currentDate = date.toLocaleDateString();
    var time = date.toLocaleTimeString();
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Update the content of the HTML element with the current date, time, and time zone
    document.getElementById("time").textContent = `Day: ${day}\nDate: ${currentDate}\nTime: ${time}\nTime Zone: ${timeZone}`;
}
