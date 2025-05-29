// Menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal setup
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500,
});


// Slide-related logic
const selectCards = document.querySelectorAll(".select__card");
selectCards[0]?.classList.add("show__info");

const price = ["$150", "$100", "$130", "$160"];
const priceEl = document.getElementById("select-price");

let currentSlideIndex = 0; // 

function updateSwiperImage(index) {
  priceEl.innerText = price[index];
  selectCards.forEach((item) => {
    item.classList.remove("show__info");
  });
  if (selectCards[index]) {
    selectCards[index].classList.add("show__info");
  }
  currentSlideIndex = index; // 
}

document.getElementById("view-details-btn").addEventListener("click", () => {
  //  Go to details page with slide index in the URL
  window.location.href = `carsdetails.html?slide=${currentSlideIndex}`;
});

// Swiper initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },
  on: {
    slideChange: function () {
      updateSwiperImage(this.realIndex);
      currentSlideIndex = this.realIndex;
    },
  },
});


