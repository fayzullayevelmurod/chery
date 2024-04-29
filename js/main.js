

// footer
let footer_btn = document.querySelector('.footer_btn');
let footer_text = document.querySelector('.footer_text');

footer_btn.addEventListener('click', () => {
    footer_btn.classList.toggle('active')
    footer_text.classList.toggle('active')
})
// footer

// comment
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".comment_Swiper", {
//   centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
// comment