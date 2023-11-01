/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

//Menu functions
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu__item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 1; // Ajusta para mejorar la detección
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuItems.forEach((item) => item.classList.remove('menu__item--active'));
                menuItems[index].classList.add('menu__item--active');
            }
        });
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
                    pane.classList.add("tab-pane--active");
                } else {
                    pane.classList.remove("tab-pane--active");
                }
            });
  
            tabs.forEach(t => {
                t.classList.remove("nav-link--active");
            });
  
            this.classList.add("nav-link--active");
        });
    });
  });
  


