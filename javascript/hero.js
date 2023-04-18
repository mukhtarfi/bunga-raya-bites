var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Image slider manual navigation
var manualNav = function(manual) {
  slides.forEach((slide) => {
    slide.cla1ssList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

// Line 6 is to define the function call manualNav
// Line 7 Starts a loop of going through the slides class 
// Line 8 remove the active class
// Line 10 Starts a loop of going through the btn class
// Line 11 remove the active class
// Line 15 and 16 made spefici slide visible by adding active class to it

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Add click event listeners to each button in the navigation menu.
// When a button is clicked, it calls the manualNav function to switch to the corresponding slide, and it updates the currentSlide variable to keep track of which slide is active.

// Javascript for image slider autoplay navigation
var repeat = function(activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function() {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  }
  repeater();
}
repeat();
