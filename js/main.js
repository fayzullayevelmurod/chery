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