import { initCategorySliders } from '../swiper/init-sliders.js';

export class CategoryManager {
    constructor() {
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.categorySelect = document.getElementById('category-select');
        this.productViews = document.querySelectorAll('.product-view');
        this.currentCategory = 'all';
        this.sliders = {};
        this.init();
    }

    init() {
        this.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                this.switchCategory(category);
            });
        });

        if (this.categorySelect) {
            this.categorySelect.addEventListener('change', (e) => {
                const category = e.target.value;
                this.switchCategory(category);
            });
        }

        this.initializeSliders();
        this.initCartButtons();
    }

    initializeSliders() {
        // Khởi tạo sliders cho các category
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

    switchCategory(category) {
        if (this.currentCategory === category) return;

        this.categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });

        if (this.categorySelect) {
            this.categorySelect.value = category;
        }

        this.productViews.forEach(view => {
            view.classList.remove('active');
        });

        setTimeout(() => {
            const targetView = document.getElementById(`view-${category}`);
            if (targetView) {
                targetView.classList.add('active');
            }
        }, 150);

        this.currentCategory = category;

        setTimeout(() => {
            if (category === 'all') {
                if (window.productSlider) {
                    window.productSlider.update();
                }
            } else if (this.sliders[category]) {
                this.sliders[category].update();
            }
        }, 200);

        const categoryNames = {
            'all': 'Tất cả sản phẩm',
            'banh-ngot': 'Bánh ngọt',
            'banh-man': 'Bánh mặn', 
            'banh-cao-cap': 'Bánh cao cấp',
            'banh-truyen-thong': 'Bánh truyền thống'
        };

        window.cart.notify(`Đang xem: ${categoryNames[category]}`);
    }

    initCartButtons() {
        document.querySelectorAll('.cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.user.isLoggedIn) {
                    window.cart.add(btn.closest('.box'));
                } else {
                    window.cart.notify('Vui lòng đăng nhập để thêm vào giỏ hàng!');
                }
            });
        });
    }

    getCurrentCategory() {
        return this.currentCategory;
    }

    getSlider(category) {
        return this.sliders[category];
    }
}