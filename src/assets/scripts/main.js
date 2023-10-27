/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

//Menu functions
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuList = document.querySelector(".menu-list");

  menuButton.addEventListener("click", function () {
      menuList.classList.toggle("active");
  });
});


// Testimonials
const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
    });
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

prevButton.addEventListener("click", prevTestimonial);
nextButton.addEventListener("click", nextTestimonial);

showTestimonial(currentIndex);



//Recipes
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          const target = this.getAttribute("data-target");
          const tabPanes = document.querySelectorAll(".tab-pane");
          
          tabPanes.forEach(pane => {
              if (pane.id === target) {
                  pane.classList.add("active");
              } else {
                  pane.classList.remove("active");
              }
          });

          tabs.forEach(t => {
              t.classList.remove("active");
          });

          this.classList.add("active");
      });
  });
});


