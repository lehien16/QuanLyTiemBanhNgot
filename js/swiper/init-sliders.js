export function initMainSlider() {
    window.productSlider = new Swiper('.product-slider', {
        loop: false,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
                initialSlide: 1,
            },
        }
    });
}

export function initCategorySliders() {
    const categories = ['banh-ngot', 'banh-man', 'banh-cao-cap', 'banh-truyen-thong'];
        
    categories.forEach(category => {
        const sliderElement = document.querySelector(`.product-slider-${category}`);
        if (sliderElement) {
            this.sliders[category] = new Swiper(`.product-slider-${category}`, {
                loop: false,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 20,
                initialSlide: 0,
                watchSlidesProgress: true,
                pagination: {
                    el: `.product-slider-${category} .swiper-pagination`,
                    clickable: true,
                    type: 'bullets',
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                },
                navigation: {
                    nextEl: `.product-slider-${category} .swiper-button-next`,
                    prevEl: `.product-slider-${category} .swiper-button-prev`,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 30,
                        initialSlide: 0,
                    },
                }
            });
        }
    });
}