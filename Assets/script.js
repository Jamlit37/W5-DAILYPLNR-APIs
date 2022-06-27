function time() {

  // Used class sessions for this code
  $("#currentDay").html(moment().format("dddd, MMMM Do" ));
  // Used to pull the hour by number in HTML: https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/ and class activity for if and else as well as adding the class and removing the class
  var current = moment().format("k");
  for (var i = 0; i < schArray.length; i++) {
      schArray[i].removeClass("past present future");

      if (current > schArray[i].data("hour")) {
          schArray[i].addClass("past");

      } else if (current === schArray[i].attr("data-hour")) {
          schArray[i].addClass("present");

      } else {

          schArray[i].addClass("future");
      }
  }
}

// Idea for the way to list and write multiple var: https://stackoverflow.com/questions/694102/declaring-multiple-variables-in-javascript
var sch9 = $("#9AM"), 
sch10 = $("#10AM"), 
sch11 = $("#11AM"), 
sch12 = $("#12PM"), 
sch13 = $("#1PM"), 
sch14 = $("#2PM"), 
sch15 = $("#3PM"), 
sch16 = $("#4PM"), 
sch17 = $("#5PM");

var schArray = [
  sch9, sch10, sch11, sch12, sch13, sch14, sch15, sch16, sch17,
];



// Idea for using for...of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
function pullLocalStorage() {
  for (const element of schArray) {
      element.val(localStorage.getItem("timeBlock " + element.data("hour")));

  }
}

// From class activity and sibling selector found through: https://api.jquery.com/siblings/
function handleFormSubmit(event) {
  event.preventDefault();

  var btnClicked = $(event.currentTarget),
  targetText = btnClicked.siblings("textarea"),targetTimeBlock = targetText.data("hour");

  localStorage.setItem("timeBlock " +  targetTimeBlock, targetText.val());
}
// Code to setInterval: https://javascript.info/settimeout-setinterval
pullLocalStorage();
time();
setInterval(time, 1000); 

var saveBtn = $(".saveBtn");
saveBtn.on("click", handleFormSubmit);