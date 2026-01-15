export class ShoppingCart {
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
            if (window.user.isLoggedIn) {
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
        
        document.querySelector('.checkout-btn')?.addEventListener('click', () => this.checkout());
        document.getElementById('clear-cart')?.addEventListener('click', () => this.clearAll());
    }

    loadItems() {
        this.items = window.user.isLoggedIn ? JSON.parse(localStorage.getItem('cartItems')) || [] : [];
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
        if (!window.user.isLoggedIn) return;
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
                            <button class="quantity-btn" onclick="window.cart.updateQuantity('${i.name.replace(/'/g, "\\'")}', -1)">-</button>
                            <span class="quantity-display">${i.quantity}</span>
                            <button class="quantity-btn" onclick="window.cart.updateQuantity('${i.name.replace(/'/g, "\\'")}', 1)">+</button>
                            <button class="remove-item" onclick="window.cart.remove('${i.name.replace(/'/g, "\\'")}')">Xóa</button>
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