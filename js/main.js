
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

function makeProgressBar(el, val) {
  let currentVal = +el.querySelector('h4').textContent;
  let degree = 100 - currentVal * 100 / val;
  el.style.background = `conic-gradient(#bb4758 ${degree}%, #FFF 0%)`
}

function makeTimerEl () {
    timerEl.day.textContent = day;
    timerEl.hour.textContent = hour < 10 ? '0' + hour : hour;
    timerEl.minut.textContent = minut < 10 ? '0' + minut : minut;
    timerEl.secund.textContent = secund < 10 ? '0' + secund : secund;
    document.querySelectorAll('.timer__content_item').forEach((el, index) => {
      if (index == 0) {
        makeProgressBar(el, 7);
      } else if (index == 1) {
        makeProgressBar(el, 24);
      } else {
        makeProgressBar(el, 59);
      }
    })
}

var init = false;
var bookSwiper;
function swiperCard() {
  if (window.innerWidth <= 992) {
    if (!init) {
      init = true;
      bookSwiper = new Swiper('.book .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 14,
      })
    }
  } else if (init) {
    bookSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", function () {
  swiperCard();
});

let examples = document.querySelectorAll('.example');

examples.forEach(el => {
  let imgs = el.querySelectorAll('.main_img img'),
      btns = el.querySelectorAll('.img_select button');

  if (btns.length) {
    btns.forEach((btn, btnID) => {
      btn.onclick = () => {
        imgs.forEach((img, imgID) => {
          if (imgID == btnID) {
            img.classList.add('active');
          } else {
            img.classList.remove('active')
          }
        })
        btns.forEach(item => {
          if (btn == item) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        })
      }
    })
  }
})

let selects = document.querySelectorAll('.select');
selects.forEach(select => {
  let inp = select.querySelector('input');

  inp.onfocus = () => {
    select.classList.add('active');
  }
})

document.addEventListener('click', event => {
  if (selects.length) {
    selects.forEach(item => {
      const t1 = event.composedPath().includes(item)
  
      if (!t1) {
          item.classList.remove('active');
      }
    })
  }
})