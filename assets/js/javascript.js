$(document).ready(function () {

   //setting id of currentDay to this moment.js (weekday, month, day of month, and year) 
   $("#currentDay").text(moment().format("dddd, MMMM do YYYY"));

   // setting current hour to a variable for use later. 
   var currentHour = moment().hours();

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

   // Taking class that is click on to execute a function.
   $(".saveBtn").on("click", function () {
      // this actually grab what the user types in 
      var userTask = $(this).siblings(".description").val();
      // this grabs the value of the id
      var time = $(this).parent().attr("id");
      // this sets the user date into local storage with a key of time.
      localStorage.setItem(time, userTask);
   });

   // this clear out the content of 
   $(".trashBtn").on("click", function () {
      // this grabs the value of the id
      var time = $(this).parent().attr("id");
      // this sets the user date into local storage with a key of time.
      localStorage.removeItem(time);
   });


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
   };

// Non-working function at the moment.
   // function keepSchedule() {
   //    console.log("hello1")
   //    var oldTasks = [];
   //    for (var i = 9; i < 18; i++) {
   //       var keep;
   //       var timeValue= {
   //       time:
   //       value: 
   // }
   //       var oldValues = localStorage.getItem(localStorage.key(i));
         
   //       console.log(oldValues);
   //       if (oldValues !== "") {
            
   //          oldTasks.push(oldValues);
   //          console.log("hi");
   //       } else {
   //          oldTasks.push("hello");
            
   //       }

   //       if (oldValues !== "") {
   //          console.log("hello")
   //          keep = confirm("Do you want to keep the task " + oldTasks[i] + "?")
   //       }

   //       if (keep === false) {
   //          alert("This Item will be removed the next time you load the page.");
   //          console.log(localStorage.key(i))
   //          localStorage.removeItem(localStorage.key(i));
   //          localStorage.setItem(localStorage.key(i), "")
   //       }
   //    }

   // };

   // var words = JSON.parse(localStorage.getItem("words"));
   // words.push("hello");
   // localStorage.setItem("words", JSON.stringify(words));




   timeUpdater();
   // keepSchedule();

})