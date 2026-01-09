import { SearchController } from './search-controller.js';
import { productsData } from '../data/products.js';

export class EnhancedSearchController extends SearchController {
    selectProduct(productName) {
        this.closeSearchAndReset();
        
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        setTimeout(() => {
            this.navigateToProduct(productName);
        }, 800);
        
        window.cart.notify(`Đang tìm "${productName}"...`);
    }

    navigateToProduct(productName) {
        const product = productsData.find(p => p.name === productName);
        
        if (product) {
            const productCategory = product.category;
            const currentCategory = window.categoryManager.getCurrentCategory();

            if (currentCategory === productCategory) {
                this.findInCurrentView(productName);
            } else if (currentCategory === 'all') {
                this.navigateToProductSlide(productName);
            } else {
                window.categoryManager.switchCategory(productCategory);
                setTimeout(() => {
                    this.findInCurrentView(productName);
                }, 300);
            }
        } else {
            window.categoryManager.switchCategory('all');
            setTimeout(() => {
                this.navigateToProductSlide(productName);
            }, 300);
        }
    }

    findInCurrentView(productName) {
        const currentCategory = window.categoryManager.getCurrentCategory();
        
        if (currentCategory === 'all') {
            this.navigateToProductSlide(productName);
            return true;
        } else {
            const categorySlider = window.categoryManager.getSlider(currentCategory);
            if (categorySlider) {
                const slides = document.querySelectorAll(`#view-${currentCategory} .swiper-slide`);
                
                for (let i = 0; i < slides.length; i++) {
                    const slide = slides[i];
                    const productTitle = slide.querySelector('.content h3');
                    if (productTitle && productTitle.textContent.trim() === productName) {
                        this.highlightCategorySlide(categorySlider, i, productName);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    highlightCategorySlide(slider, slideIndex, productName) {
        slider.slideTo(slideIndex, 800);
        
        setTimeout(() => {
            const slides = slider.slides;
            const targetSlide = slides[slideIndex];
            const targetBox = targetSlide?.querySelector('.box');
            
            if (targetBox) {
                targetBox.style.transform = 'scale(1.08)';
                targetBox.style.boxShadow = '0 15px 40px rgba(31, 47, 92, 0.4)';
                targetBox.style.border = '3px solid #1f2f5c';
                targetBox.style.transition = 'all 0.4s ease';
                targetBox.style.zIndex = '10';
                
                window.cart.notify(`Đã tìm thấy "${productName}"!`);
                
                setTimeout(() => {
                    targetBox.style.transform = '';
                    targetBox.style.boxShadow = '';
                    targetBox.style.border = '';
                    targetBox.style.zIndex = '';
                }, 4000);
            }
        }, 900);
    }
}