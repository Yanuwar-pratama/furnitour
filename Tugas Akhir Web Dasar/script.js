// navbar
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".nav-option ul");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelectorAll(".nav-option ul li a");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("pop");
});

closeButton.addEventListener("click", function () {
  navbar.classList.toggle("pop");
});

for (m of menu) {
  m.addEventListener("click", function () {
    navbar.classList.toggle("pop");
  });
}

// slider
let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex = slideIndex + n));
  console.log(slideIndex);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dots");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  if (n > dots.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = dots.length;
  }

  for (a of slides) {
    a.style.display = "none";
  }

  for (d of dots) {
    d.className = d.className.replace(" dot-active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " dot-active";
}
