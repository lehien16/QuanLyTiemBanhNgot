export class UserManager {
    constructor() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.username = localStorage.getItem('username') || '';
        this.userIcon = document.getElementById('user-icon');
        this.loginModal = document.getElementById('login-modal');
        this.registerModal = document.getElementById('register-modal');
        this.changePasswordModal = document.getElementById('change-password-modal');
        this.dropdown = document.getElementById('user-dropdown');
        this.userStatus = document.getElementById('user-status');
        this.userNameEl = document.getElementById('user-name');
        this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        this.init();
    }

    init() {
        this.updateUI();

        this.userIcon.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleUserClick();
        });

        document.getElementById('close-login')?.addEventListener('click', () => this.loginModal.classList.remove('open'));
        document.getElementById('close-register')?.addEventListener('click', () => this.registerModal.classList.remove('open'));
        document.getElementById('close-change-password')?.addEventListener('click', () => this.changePasswordModal.classList.remove('open'));

        document.getElementById('show-register')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showRegister();
        });

        document.getElementById('show-login')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLogin();
        });

        document.getElementById('change-password')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showChangePassword();
        });

        document.getElementById('login-form')?.addEventListener('submit', e => {
            e.preventDefault();
            const usernameOrEmail = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            const loginResult = this.validateLogin(usernameOrEmail, password);
            if (loginResult.success) {
                this.login(loginResult.username);
            } else {
                window.cart.notify('Tên đăng nhập/Email hoặc mật khẩu sai!');
            }
        });

        document.getElementById('register-form')?.addEventListener('submit', e => {
            e.preventDefault();
            this.handleRegister();
        });

        document.getElementById('change-password-form')?.addEventListener('submit', e => {
            e.preventDefault();
            this.handleChangePassword();
        });

        document.getElementById('logout')?.addEventListener('click', e => {
            e.preventDefault();
            this.logout();
        });

        document.getElementById('password-toggle')?.addEventListener('click', () => {
            this.togglePassword('password', 'password-toggle');
        });

        document.getElementById('reg-password-toggle')?.addEventListener('click', () => {
            this.togglePassword('reg-password', 'reg-password-toggle');
        });

        document.getElementById('reg-confirm-toggle')?.addEventListener('click', () => {
            this.togglePassword('reg-confirm-password', 'reg-confirm-toggle');
        });

        document.getElementById('current-password-toggle')?.addEventListener('click', () => {
            this.togglePassword('current-password', 'current-password-toggle');
        });

        document.getElementById('new-password-toggle')?.addEventListener('click', () => {
            this.togglePassword('new-password', 'new-password-toggle');
        });

        document.getElementById('confirm-new-password-toggle')?.addEventListener('click', () => {
            this.togglePassword('confirm-new-password', 'confirm-new-password-toggle');
        });
    }

    validateLogin(usernameOrEmail, password) {
        if ((usernameOrEmail === 'admin' || usernameOrEmail === 'admin@demo.com') && password === 'password') {
            return { success: true, username: 'admin' };
        }
        
        const user = this.registeredUsers.find(user => 
            (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
        );
        
        if (user) {
            return { success: true, username: user.username };
        }
        
        return { success: false };
    }

    handleRegister() {
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value.trim();
        const confirmPassword = document.getElementById('reg-confirm-password').value.trim();

        if (!username || !email || !password || !confirmPassword) {
            window.cart.notify('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (username.length < 3) {
            window.cart.notify('Tên đăng nhập phải có ít nhất 3 ký tự!');
            return;
        }

        if (!this.isValidEmail(email)) {
            window.cart.notify('Email không hợp lệ!');
            return;
        }

        if (password.length < 6) {
            window.cart.notify('Mật khẩu phải có ít nhất 6 ký tự!');
            return;
        }

        if (password !== confirmPassword) {
            window.cart.notify('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (username === 'admin' || this.registeredUsers.some(user => user.username === username)) {
            window.cart.notify('Tên đăng nhập đã tồn tại!');
            return;
        }

        if (email === 'admin@demo.com' || this.registeredUsers.some(user => user.email === email)) {
            window.cart.notify('Email đã được sử dụng!');
            return;
        }

        const newUser = {
            username,
            email,
            password,
            registeredAt: new Date().toISOString()
        };

        this.registeredUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

        window.cart.notify('Đăng ký thành công! Đang đăng nhập...');
        
        setTimeout(() => {
            this.login(username, false);
            this.registerModal.classList.remove('open');
            document.body.classList.remove('modal-open');
            document.getElementById('register-form').reset();
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }, 1000);
    }

    handleChangePassword() {
        const currentPassword = document.getElementById('current-password').value.trim();
        const newPassword = document.getElementById('new-password').value.trim();
        const confirmNewPassword = document.getElementById('confirm-new-password').value.trim();

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            window.cart.notify('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (newPassword.length < 6) {
            window.cart.notify('Mật khẩu mới phải có ít nhất 6 ký tự!');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            window.cart.notify('Mật khẩu mới xác nhận không khớp!');
            return;
        }

        if (currentPassword === newPassword) {
            window.cart.notify('Mật khẩu mới phải khác mật khẩu hiện tại!');
            return;
        }

        const loginResult = this.validateLogin(this.username, currentPassword);
        if (!loginResult.success) {
            window.cart.notify('Mật khẩu hiện tại không đúng!');
            return;
        }

        if (this.username === 'admin') {
            window.cart.notify('Không thể đổi mật khẩu tài khoản demo!');
            return;
        }

        const userIndex = this.registeredUsers.findIndex(user => user.username === this.username);
        if (userIndex !== -1) {
            this.registeredUsers[userIndex].password = newPassword;
            localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
            
            window.cart.notify('Đổi mật khẩu thành công!');
            this.changePasswordModal.classList.remove('open');
            document.body.classList.remove('modal-open');
            document.getElementById('change-password-form').reset();
        } else {
            window.cart.notify('Có lỗi xảy ra, vui lòng thử lại!');
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showRegister() {
        this.loginModal.classList.remove('open');
        this.changePasswordModal.classList.remove('open');
        this.registerModal.classList.add('open');
        document.body.classList.add('modal-open');
    }

    showLogin() {
        this.registerModal.classList.remove('open');
        this.changePasswordModal.classList.remove('open');
        this.loginModal.classList.add('open');
        document.body.classList.add('modal-open');
    }

    showChangePassword() {
        this.loginModal.classList.remove('open');
        this.registerModal.classList.remove('open');
        this.dropdown.classList.remove('open');
        this.changePasswordModal.classList.add('open');
        document.body.classList.add('modal-open');
    }

    togglePassword(inputId, toggleId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleId);
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
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

    login(username, shouldReload = true) {
        this.isLoggedIn = true;
        this.username = username;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        this.loginModal.classList.remove('open');
        this.registerModal.classList.remove('open');
        this.changePasswordModal.classList.remove('open');
        document.body.classList.remove('modal-open');
        this.updateUI();
        window.cart.notify('Đăng nhập thành công!');
        window.cart.loadItems();
        
        document.getElementById('login-form')?.reset();
        document.getElementById('register-form')?.reset();
        document.getElementById('change-password-form')?.reset();
        
        if (shouldReload) {
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.username = '';
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('cartItems');
        this.dropdown.style.display = 'none';
        this.updateUI();
        window.cart.notify('Đăng xuất thành công!');
        window.cart.items = [];
        window.cart.render();
        
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    updateUI() {    
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