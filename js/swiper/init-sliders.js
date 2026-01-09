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
    // Function này giờ chỉ là fallback, CategoryManager sẽ tự khởi tạo sliders
    console.log('initCategorySliders called - using CategoryManager instead');
}