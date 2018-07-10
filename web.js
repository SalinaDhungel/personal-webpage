// set slide index to 1 and call showSlides to show first image
var slideIndex = 1;
showSlides(slideIndex);

// The plusSlides() function subtracts one or adds one to the slideIndex.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // if the next slide is > the number of slides, go back to first slide
  if (n > slides.length) {slideIndex = 1}
  // if the prev slide is < the number of slides then go to last slide    
  if (n < 1) {slideIndex = slides.length}

  // Initially, hide all the slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  // make none of the dots active
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // display current slide and make corresponding dot active
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

