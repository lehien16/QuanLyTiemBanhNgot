import { SmartSearchEngine } from './search/smart-search-engine.js';
import { EnhancedSearchController } from './search/enhanced-search.js';
import { ShoppingCart } from './cart/shopping-cart.js';
import { UserManager } from './user/user-manager.js';
import { CategoryManager } from './category/category-manager.js';
import { initMainSlider } from './swiper/init-sliders.js';

window.productSlider = null;
window.searchController = null;
window.cart = null;
window.user = null;
window.categoryManager = null;

document.addEventListener('DOMContentLoaded', () => {
    initMainSlider();

    window.user = new UserManager();
    window.cart = new ShoppingCart();
    window.categoryManager = new CategoryManager();
    
    window.searchEngine = new SmartSearchEngine();
    window.searchController = new EnhancedSearchController();
    
    document.querySelectorAll('.smooth-link').forEach(link => {
        link.addEventListener('click', () => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle?.checked) {
                menuToggle.checked = false;
            }
        });
    });
    
    document.querySelector('.contact form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!user.isLoggedIn) {
            const noti = document.getElementById('cart-notification');
            const msg = document.getElementById('noti-message');
            msg.textContent = 'Vui lòng đăng nhập để gửi tin nhắn!';
            noti.classList.add('show');
            setTimeout(() => noti.classList.remove('show'), 2000);
            return;
        }
        
        const form = e.target;
        const inputs = form.querySelectorAll('.box');
        const isEmpty = Array.from(inputs).some(input => !input.value.trim());
        
        const noti = document.getElementById('cart-notification');
        const msg = document.getElementById('noti-message');
        
        if (isEmpty) {
            msg.textContent = 'Vui lòng điền đầy đủ thông tin!';
        } else {
            msg.textContent = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.';
            form.reset();
        }
        
        noti.classList.add('show');
        setTimeout(() => noti.classList.remove('show'), 2000);
    });
});