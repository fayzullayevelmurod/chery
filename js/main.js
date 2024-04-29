
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
let homeSlider = new Swiper('.home .swiper', {
    slidesPerview: 1,
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.home .swiper_pagination',
        clickable: true,
    }
})

let day = 3,
    hour = 6,
    minut = 14,
    secund = 10;

let timerEl = {
    day: document.querySelector('.timer .day'),
    hour: document.querySelector('.timer .hour'),
    minut: document.querySelector('.timer .minut'),
    secund: document.querySelector('.timer .secund'),
}

let clsInterval = setInterval(() => {
    secund--;
    if (secund == 0) {
        secund = 59;
        minut--;
    }
    if (minut == 0) {
        hour--;
        minut = 59;
    }
    if (hour == 0) {
        day--;
        hour = 23
    }

    if (day == 0 && hour == 0 && minut == 0 && secund ==0) {
        clearInterval(clsInterval);
    }

    makeTimerEl();
}, 1000);

function makeTimerEl () {
    timerEl.day.textContent = day;
    timerEl.hour.textContent = hour < 10 ? '0' + hour : hour;
    timerEl.minut.textContent = minut < 10 ? '0' + minut : minut;
    timerEl.secund.textContent = secund < 10 ? '0' + secund : secund;
    document.querySelectorAll('.timer__content_item').forEach(el => {
        console.log(el);
    })
}
