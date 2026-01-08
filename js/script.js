const productSlider = new Swiper('.product-slider', {
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

class UserManager {
    constructor() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.username = localStorage.getItem('username') || '';
        this.userIcon = document.getElementById('user-icon');
        this.loginModal = document.getElementById('login-modal');
        this.dropdown = document.getElementById('user-dropdown');
        this.userStatus = document.getElementById('user-status');
        this.userNameEl = document.getElementById('user-name');
        this.init();
    }

    init() {
        this.updateUI();

        this.userIcon.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleUserClick();
        });

        document.getElementById('close-login')?.addEventListener('click', () => this.loginModal.classList.remove('open'));
        this.loginModal?.addEventListener('click', e => e.target === this.loginModal && this.loginModal.classList.remove('open'));

        document.getElementById('login-form')?.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === 'admin' && password === 'password') {
                this.login(username);
            } else {
                cart.notify('Tên đăng nhập hoặc mật khẩu sai!');
            }
        });

        document.getElementById('logout')?.addEventListener('click', e => {
            e.preventDefault();
            this.logout();
        });

        document.getElementById('password-toggle')?.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const toggleIcon = document.getElementById('password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            }
        });
    }

    handleUserClick() {
        if (this.isLoggedIn) {
            const isOpen = this.dropdown.classList.contains('open');
            this.closeDropdown();

            if (!isOpen) {
                this.dropdown.classList.add('open');
                setTimeout(() => {
                    document.addEventListener('click', this.outsideClickHandler);
                }, 0);
            }
        } else {
            this.loginModal.classList.add('open');
            document.body.classList.add('modal-open');
        }
    }

    closeDropdown() {
        this.dropdown.classList.remove('open');
        document.removeEventListener('click', this.outsideClickHandler);
    }

    outsideClickHandler = (e) => {
        if (!this.dropdown.contains(e.target) && !this.userIcon.contains(e.target)) {
            this.closeDropdown();
        }
    }

    login(username) {
        this.isLoggedIn = true;
        this.username = username;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        this.loginModal.classList.remove('open');
        document.body.classList.remove('modal-open');
        this.updateUI();
        cart.notify('Đăng nhập thành công!');
        cart.loadItems();
    }

    logout() {
        this.isLoggedIn = false;
        this.username = '';
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('cartItems');
        this.dropdown.style.display = 'none';
        this.updateUI();
        cart.notify('Đăng xuất thành công!');
        cart.items = [];
        cart.render();
    }

    updateUI() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.username = localStorage.getItem('username') || '';
        
        const contactSubmitBtn = document.querySelector('.contact form .btn');
        if (contactSubmitBtn) {
            contactSubmitBtn.style.opacity = this.isLoggedIn ? '1' : '0.6';
            contactSubmitBtn.style.cursor = this.isLoggedIn ? 'pointer' : 'not-allowed';
            contactSubmitBtn.value = this.isLoggedIn ? 'Gửi tin nhắn' : 'Đăng nhập để gửi tin nhắn';
        }

        if (this.userStatus) {
            this.userStatus.classList.toggle('online', this.isLoggedIn);
        }

        if (this.userNameEl) {
            this.userNameEl.textContent = this.isLoggedIn ? this.username : 'Chưa đăng nhập';
        }

        this.userIcon.title = this.isLoggedIn ? `Xin chào, ${this.username}` : 'Tài khoản';

        this.closeDropdown();
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        Object.assign(this, {
            modal: document.getElementById('cart-modal'),
            itemsEl: document.getElementById('cart-items'),
            totalEl: document.getElementById('cart-total'),
            countEl: document.getElementById('cart-count')
        });
        this.init();
        this.loadItems();
    }

    init() {
        document.getElementById('cart-icon')?.addEventListener('click', () => {
            if (user.isLoggedIn) {
                this.modal.classList.toggle('open');
                document.body.classList.toggle('modal-open');
            } else {
                this.notify('Vui lòng đăng nhập để sử dụng giỏ hàng!');
            }
        });
        
        document.getElementById('close-cart')?.addEventListener('click', () => {
            this.modal.classList.remove('open');
            document.body.classList.remove('modal-open');
        });
        
        this.modal?.addEventListener('click', e => {
            if (e.target === this.modal) {
                this.modal.classList.remove('open');
                document.body.classList.remove('modal-open');
            }
        });
        
        document.querySelectorAll('.cart-btn').forEach(btn => 
            btn.addEventListener('click', e => {
                e.preventDefault();
                if (user.isLoggedIn) this.add(btn.closest('.box'));
                else this.notify('Vui lòng đăng nhập để thêm vào giỏ hàng!');
            })
        );
        
        document.querySelector('.checkout-btn')?.addEventListener('click', () => this.checkout());
        document.getElementById('clear-cart')?.addEventListener('click', () => this.clearAll());
    }

    loadItems() {
        this.items = user.isLoggedIn ? JSON.parse(localStorage.getItem('cartItems')) || [] : [];
        this.render();
    }

    add(box) {
        if (!box) return;
        const name = box.querySelector('.content h3').textContent.trim();
        const existing = this.items.find(i => i.name === name);
        
        if (existing) existing.quantity++;
        else this.items.push({
            name,
            price: +box.querySelector('.content .price').childNodes[0].textContent.replace(/[^\d]/g, ''),
            image: box.querySelector('.image img').src,
            quantity: 1
        });
        
        this.render();
        this.notify(`Đã thêm "${name}" vào giỏ hàng!`);
    }

    updateQuantity(name, delta) {
        const item = this.items.find(i => i.name === name);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) this.remove(name);
            else this.render();
        }
    }

    remove(name) {
        this.items = this.items.filter(i => i.name !== name);
        this.render();
        this.notify('Đã xóa sản phẩm khỏi giỏ hàng!');
    }

    clearAll() {
        if (this.items.length === 0) {
            this.notify('Chưa có gì trong giỏ hàng!');
            return;
        }
        
        this.items = [];
        this.render();
        this.notify('Đã xóa tất cả sản phẩm!');
    }

    render() {
        if (!user.isLoggedIn) return;
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        const totalQuantity = this.items.reduce((s, i) => s + i.quantity, 0);
        
        this.countEl.textContent = totalQuantity;
        this.countEl.classList.toggle('hidden', totalQuantity === 0);
        
        this.itemsEl.innerHTML = this.items.length === 0 ? '<p class="empty-cart">Giỏ hàng trống</p>' :
            this.items.map(i => `
                <div class="cart-item">
                    <img src="${i.image}" alt="${i.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${i.name}</div>
                        <div class="cart-item-price">${i.price.toLocaleString()}đ</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="cart.updateQuantity('${i.name.replace(/'/g, "\\'")}', -1)">-</button>
                            <span class="quantity-display">${i.quantity}</span>
                            <button class="quantity-btn" onclick="cart.updateQuantity('${i.name.replace(/'/g, "\\'")}', 1)">+</button>
                            <button class="remove-item" onclick="cart.remove('${i.name.replace(/'/g, "\\'")}')">Xóa</button>
                        </div>
                    </div>
                </div>
            `).join('');
        
        this.totalEl.textContent = this.items.reduce((s, i) => s + i.price * i.quantity, 0).toLocaleString();
    }

    checkout() {
        if (this.items.length === 0) {
            this.notify('Chưa có gì trong giỏ hàng!');
            return;
        }
        
            this.items = [];
            this.render();
            this.notify('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
            this.modal.classList.remove('open');
            document.body.classList.remove('modal-open');
    }

    notify(msg) {
        const noti = document.getElementById('cart-notification');
        const msgEl = document.getElementById('noti-message');
        
        noti.className = `notification`;
        msgEl.textContent = msg;
        noti.classList.add('show');
        
        clearTimeout(this.timer);
        this.timer = setTimeout(() => noti.classList.remove('show'), 2000);
    }
}

const user = new UserManager();
const cart = new ShoppingCart();
