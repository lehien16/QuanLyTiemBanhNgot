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

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        Object.assign(this, {
            modal: document.getElementById('cart-modal'),
            itemsEl: document.getElementById('cart-items'),
            totalEl: document.getElementById('cart-total'),
            countEl: document.getElementById('cart-count')
        });
        this.init();
    }

    init() {
        document.getElementById('cart-icon')?.addEventListener('click', () => this.modal.classList.toggle('open'));
        document.getElementById('close-cart')?.addEventListener('click', () => this.modal.classList.remove('open'));
        this.modal?.addEventListener('click', e => e.target === this.modal && this.modal.classList.remove('open'));
        document.querySelectorAll('.cart-btn').forEach(btn => 
            btn.addEventListener('click', e => (e.preventDefault(), this.add(btn.closest('.box'))))
        );
        document.querySelector('.checkout-btn')?.addEventListener('click', () => this.checkout());
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
            item.quantity <= 0 ? this.remove(name) : this.render();
        }
    }

    remove(name) {
        this.items = this.items.filter(i => i.name !== name);
        this.render();
    }

    render() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        const total = this.items.reduce((s, i) => s + i.quantity, 0);
        
        this.countEl.textContent = total;
        this.countEl.classList.toggle('hidden', !total);
        
        this.itemsEl.innerHTML = !this.items.length ? '<p class="empty-cart">Giỏ hàng trống</p>' :
            this.items.map(i => `<div class="cart-item"><img src="${i.image}" alt="${i.name}">
                <div class="cart-item-info"><div class="cart-item-name">${i.name}</div>
                <div class="cart-item-price">${i.price.toLocaleString()}đ</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${i.name}',-1)">-</button>
                    <span class="quantity-display">${i.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity('${i.name}',1)">+</button>
                    <button class="remove-item" onclick="cart.remove('${i.name}')">Xóa</button>
                </div></div></div>`).join('');
        
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
    }

    notify(msg) {
        const noti = document.getElementById('cart-notification');
        document.getElementById('noti-message').textContent = msg;
        noti.classList.add('show');
        clearTimeout(this.timer);
        this.timer = setTimeout(() => noti.classList.remove('show'), 2000);
    }
}

const cart = new ShoppingCart();
