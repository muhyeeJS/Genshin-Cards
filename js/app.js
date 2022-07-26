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
//store chances for 50-50
if(localStorage.getItem('isFeaturedFive') === null || localStorage.getItem('isFeaturedFour') === null || localStorage.getItem('fiveStarPity') === null || localStorage.getItem('fourStarPity') === null) {
  localStorage.setItem('isFeaturedFive', 0);
  localStorage.setItem('isFeaturedFour', 0);
  localStorage.setItem('fiveStarPity', 0);
  localStorage.setItem('fourStarPity', 0);
}
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
  // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Banner ended!";
    document.querySelector('body').style.pointerEvents = 'none';
  }
}, 1000);
localStorage.setItem('bannerSelected', 'kazuha');
var kazuha = document.getElementById('bannerKazuha');
var cardsContainer = document.getElementById('cardsContainer');
var cards = cardsContainer.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    var currentActive = document.getElementsByClassName('activeCard');
    currentActive[0].className = currentActive[0].className.replace(' activeCard', '');
    this.className += ' activeCard';
  });
  kazuha.classList.add('activeKazuha');
}
function activateKazuha() {
  var kazuha = document.getElementById('bannerKazuha');
  var klee = document.getElementById('bannerKlee');
  var weapon = document.getElementById('bannerWeapon');
  var bannerImg = document.getElementById('bannerImg');
  localStorage.setItem('bannerSelected', 'kazuha');
  kazuha.classList.add('activeKazuha');
  klee.classList.remove('activeKlee');
  weapon.classList.remove('activeWeapon');
  bannerImg.src = './assets/images/card/banner/kazuha/leaves_in_the_wind.png';
  bannerImg.classList.add('fade');
  setTimeout(function() {
    bannerImg.classList.remove('fade');
  }, 300);
}
function activateKlee() {
  var kazuha = document.getElementById('bannerKazuha');
  var klee = document.getElementById('bannerKlee');
  var weapon = document.getElementById('bannerWeapon');
  var bannerImg = document.getElementById('bannerImg');
  localStorage.setItem('bannerSelected', 'klee');
  kazuha.classList.remove('activeKazuha');
  klee.classList.add('activeKlee');
  weapon.classList.remove('activeWeapon');
  bannerImg.src = './assets/images/card/banner/klee/sparkling_steps.png';
  bannerImg.classList.add('fade');
  setTimeout(function() {
    bannerImg.classList.remove('fade');
  }, 300);
}
function activateWeapon() {
  var kazuha = document.getElementById('bannerKazuha');
  var klee = document.getElementById('bannerKlee');
  var weapon = document.getElementById('bannerWeapon');
  var bannerImg = document.getElementById('bannerImg');
  localStorage.setItem('bannerSelected', 'weapon');
  kazuha.classList.remove('activeKazuha');
  klee.classList.remove('activeKlee');
  weapon.classList.add('activeWeapon');
  bannerImg.src = './assets/images/card/banner/weapon/epitome_invocation.png';
  bannerImg.classList.add('fade');
  setTimeout(function() {
    bannerImg.classList.remove('fade');
  }, 300);
}
function closeResult() {
  var resultContainer = document.getElementById('resultContainer');
  if(resultContainer.style.display = 'block') {
    resultContainer.style.display = 'none';
  }
}