document.addEventListener('DOMContentLoaded', function () {
    const tasksSlider = new Swiper('.tasks_slider', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        speed: 600,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            577: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            1601: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        },
    });

    // анимация
    let offset;
    if (window.innerWidth > 991) {
        offset = 150;
    } else {
        offset = 20;
    }

    AOS.init({
        easing: 'ease',
        delay: 100,
        once: true,
        duration: 1000,
        offset: offset,
    });

    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach((element) => {
            var parallaxInstance = new Parallax(element);
            relativeInput: true;
        });
    }
});
