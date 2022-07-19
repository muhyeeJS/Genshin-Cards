document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loader").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

// Set the date we're counting down to
var countDownDate = new Date("Aug 2, 2022 17:59:59").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Banner Ended";
  }
}, 1000);