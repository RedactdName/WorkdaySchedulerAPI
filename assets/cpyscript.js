// Wraps all code that interacts with the DOM in a call to jQuery 
$(function () {
// Displays the current date and time in the header of the page.
  var currentTime = dayjs().hour();
  $("#currentDay").text(dayjs().format("dd, MMM D, YYYY hh:mm"))
// Refreshes the date/time display after 60sec
  setInterval(function() {
    $("#currentDay").text(dayjs().format("dddd, MMM D, YYYY hh:mm"))
  },60000)
// Enables save button for each hour/row 
  $(".saveBtn").on("click",function () {
    var value = $(this).siblings(".description").val();
    var hourKey = $(this).parent().attr("id");
// Saving to local storage
    localStorage.setItem(hourKey, value)
  } )
  
  //Applies the past, present, or future class to each time block by comparing the id to the current hour. 
    
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
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
  
  // Gets user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-13"));
  $("#hour-2 .description").val(localStorage.getItem("hour-14"));
  $("#hour-3 .description").val(localStorage.getItem("hour-15"));
  $("#hour-4 .description").val(localStorage.getItem("hour-16"));
  $("#hour-5 .description").val(localStorage.getItem("hour-17"));  
  

});
