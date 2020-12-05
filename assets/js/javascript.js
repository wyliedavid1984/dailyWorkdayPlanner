$(document).ready(function () {

   // 
   $("#currentDay").text(moment().format("dddd, MMMM do"))

   // grabbing anything that maybe still be in local storage from previous days or hours.
   $("#9 .description").val(localStorage.getItem("9"));
   $("#10 .description").val(localStorage.getItem("10"));
   $("#11 .description").val(localStorage.getItem("11"));
   $("#12 .description").val(localStorage.getItem("12"));
   $("#13 .description").val(localStorage.getItem("13"));
   $("#14 .description").val(localStorage.getItem("14"));
   $("#15 .description").val(localStorage.getItem("15"));
   $("#16 .description").val(localStorage.getItem("16"));
   $("#17 .description").val(localStorage.getItem("17"));
   // setting current hour to a variable for use later. 
   var currentHour = moment().hours()
  
   // this takes uses a click on the button to set local storage to users input with the .val()
   // we also use to save to a specific block with .parent method.
   $(".saveBtn").on("click", function () {
      // this actually grab what the user types in 
      var userTask = $(this).siblings(".description").val();
      // 
      var time = $(this).parent().attr("id")
      localStorage.setItem(time, userTask);
   })

   // this function takes in each time block. and updates the background depending on what time it is.
   function timeUpdater() {
      $(".time-block").each(function () {

         var blockHour = parseInt($(this).attr("id"));

         if (blockHour < currentHour) {
            $(this).children(".description").addClass("past")
         } else if (blockHour === currentHour) {
            $(this).children(".description").removeClass("past")
            $(this).children(".description").addClass("present")
         } else {
            $(this).children(".description").removeClass("past")
            $(this).children(".description").removeClass("present")
            $(this).children(".description").addClass("future")
         }
      })
   }
   timeUpdater();
  
})