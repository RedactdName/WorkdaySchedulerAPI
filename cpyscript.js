
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //save btn click listenser
  $(".saveBtn").on("click",function () {
    var value = $(this).siblings(".description").val();
    var hourKey = $(this).parent().attr("id");
    // saving to local storage
    localStorage.setItem(hourKey, value)
  } )
  //
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? dayjs/momentjs
  function workdayHours() {
    var currentTime = dayjs().hour();
    
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      
      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        
      }
    })
  }
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('llll');
  $(".currentDay").html(today);
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //Get item from local storage 
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"))  
  
  
  workdayHours();
});
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist