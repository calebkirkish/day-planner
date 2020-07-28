// get the date
// check if the date already has an entry in LS
// If it is then set the variable to the object and populate the table with the object
// If it isnt then set set it and creat a new object with empty strings
// when a user saves add the data to the object and set it in local storage again

var now = moment();
console.log(now.format());


// When I click on the cell-save cell do this:
$(".cell-save").on("click", function () {
    // $(this) = button
    var time = $(this).attr('id');
    console.log(time);
    // id =`${time}-text`   or time + "-text"  inputID = textarea id
    var inputID = '#' + time + "-text";
    var textInput = $(inputID).val();
    console.log(inputID);
    console.log(textInput);
    // localStorage.setItem(key, value) so inputID = key, textInput = value
    window.localStorage.setItem(inputID, textInput);

});

$(".cell-info").each(function () {
    //$(this) = textarea((
    //console.log($(this));
    var key = "#" + $(this).children().attr('id');

    var value = window.localStorage.getItem(key);
    $(key).text(value);
    // console.log(key);
    // console.log(value);
});
var scheduleSlot = $(".schedule-slot");

checkTime();

function checkTime() {
    var currentTime = moment()._d.getHours();
    // Testing
    // var currentTime = 12;
    // console.log(currentTime);

    scheduleSlot.each(function (i, element) {
        var infoTd = $(element).find(".cell-info");
        var dataTime = $(element).attr("data-time");
        if (dataTime == currentTime) {
            infoTd.addClass("present");
        } else if (dataTime <= currentTime) {
            infoTd.addClass("past");
        } else if (dataTime >= currentTime) {
            infoTd.addClass("future");
        } else {
            console.log("time check error");
        }
    });
}
var currentDate = now.format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);