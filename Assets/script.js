function time() {

  $("#currentDay").html(moment().format("dddd, MMMM Do" ));

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

pullLocalStorage();
time();
setInterval(time, 1000); 

function pullLocalStorage() {
  for (const element of schArray) {
      element.val(localStorage.getItem("timeBlock " + element.data("hour")));

  }
}


function handleFormSubmit(event) {
  event.preventDefault();

  var btnClicked = $(event.currentTarget),
  targetText = btnClicked.siblings("textarea"),targetTimeBlock = targetText.data("hour");

  localStorage.setItem("timeBlock " +  targetTimeBlock, targetText.val());
}

var saveBtn = $(".saveBtn");
saveBtn.on("click", handleFormSubmit);