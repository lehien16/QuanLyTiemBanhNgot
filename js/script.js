const productsData = [
    {
        name: "Tart trứng ngàn lớp",
        price: 17000,
        originalPrice: 20000,
        image: "images/tart-trung.png",
        category: "banh-ngot",
        keywords: ["tart", "trứng", "ngàn lớp", "bánh tart", "trứng muối"],
        description: "Bánh tart với lớp vỏ ngàn lớp giòn tan, nhân kem trứng béo ngậy, vị ngọt vừa phải từ đường và trứng. Không chứa đường tinh luyện quá nhiều, phù hợp cho người thích vị truyền thống mà không quá ngọt.",
        tags: ["ngọt vừa", "truyền thống", "giòn tan", "kem trứng", "có đường", "béo ngậy", "không mặn"],
        suitable: ["người lớn", "trẻ em", "văn phòng", "tiệc nhỏ", "không ăn kiêng"]
    },
    {
        name: "Bánh mì bơ tỏi",
        price: 19000,
        originalPrice: 20000,
        image: "images/bo-toi.png",
        category: "banh-man",
        keywords: ["bánh mì", "bơ tỏi", "mặn", "bánh mặn"],
        description: "Bánh mì nướng giòn rụm với bơ tỏi thơm lừng, vị mặn savory từ tỏi và bơ, hoàn toàn không ngọt hoặc chứa đường. Lý tưởng cho bữa ăn mặn hoặc snack không đường.",
        tags: ["mặn", "thơm", "giòn", "bơ tỏi", "không ngọt", "không đường", "savory"],
        suitable: ["bữa sáng", "bữa phụ", "người lớn", "tiệc nhỏ", "ăn kiêng đường"]
    },
    {
        name: "Croissant trứng muối",
        price: 22000,
        originalPrice: 25000,
        image: "images/croissant.png",
        category: "banh-cao-cap",
        keywords: ["croissant", "trứng muối", "bánh ngàn lớp", "pháp"],
        description: "Croissant kiểu Pháp với lớp vỏ ngàn lớp giòn tan, nhân trứng muối mặn béo, vị mặn ngọt cân bằng nhẹ (ít đường). Không quá ngọt, phù hợp cho người thích vị savory với chút mặn từ muối.",
        tags: ["ngọt mặn", "giòn tan", "cao cấp", "kiểu pháp", "ít ngọt", "có trứng", "không quá đường"],
        suitable: ["bữa sáng", "người lớn", "tiệc sang trọng", "quà tặng", "ăn kiêng ngọt"]
    },
    {
        name: "Bánh su kem (Hộp 12 cái lớn)",
        price: 45000,
        originalPrice: 45000,
        image: "images/su-kem.png",
        category: "banh-ngot",
        keywords: ["su kem", "kem", "hộp", "12 cái", "bánh su"],
        description: "Bánh su với vỏ mềm mịn, nhân kem tươi béo ngậy, vị ngọt từ kem và đường. Độ ngọt vừa phải, không quá gắt, nhưng chứa đường nên không phù hợp ăn kiêng.",
        tags: ["ngọt", "kem tươi", "mềm mịn", "gia đình", "có đường", "béo", "không giòn"],
        suitable: ["trẻ em", "gia đình", "tiệc", "sinh nhật", "quà tặng", "không ăn kiêng"]
    },
    {
        name: "Chocolate brownie",
        price: 18000,
        originalPrice: 18000,
        image: "images/brownie.png",
        category: "banh-ngot",
        keywords: ["chocolate", "brownie", "socola", "đắng"],
        description: "Brownie chocolate đậm đà, vị đắng ngọt hài hòa từ socola đen, độ ngọt vừa (ít đường hơn brownie thông thường). Mềm ẩm, không giòn, phù hợp cho người thích vị đắng nhẹ.",
        tags: ["chocolate", "đắng ngọt", "đậm đà", "mềm ẩm", "ít ngọt", "có đường", "không mặn"],
        suitable: ["người lớn", "yêu chocolate", "tiệc", "quà tặng", "ăn kiêng ngọt nhẹ"]
    },
    {
        name: "Bánh táo",
        price: 18000,
        originalPrice: 24000,
        image: "images/banh-tao.png",
        category: "banh-ngot",
        keywords: ["bánh táo", "táo", "trái cây", "healthy"],
        description: "Bánh táo với nhân táo tươi tự nhiên, vị chua ngọt nhẹ từ trái cây, ít đường tinh luyện. Healthy, không quá ngọt, phù hợp cho người ăn kiêng hoặc thích vị tự nhiên.",
        tags: ["ít ngọt", "trái cây", "healthy", "tươi mát", "không đường nhiều", "chua ngọt", "không béo"],
        suitable: ["trẻ em", "người ăn kiêng", "healthy", "bữa phụ"]
    },
    {
        name: "Donut cầu vồng",
        price: 30000,
        originalPrice: 30000,
        image: "images/donut.png",
        category: "banh-ngot",
        keywords: ["donut", "cầu vồng", "màu sắc", "trẻ em"],
        description: "Donut phủ lớp đường màu sắc rực rỡ, vị ngọt từ đường và bột, khá ngọt nên không phù hợp ăn kiêng. Mềm giòn nhẹ, vui nhộn cho trẻ em.",
        tags: ["màu sắc", "vui nhộn", "ngọt", "bắt mắt", "có đường", "rất ngọt", "không healthy"],
        suitable: ["trẻ em", "sinh nhật", "tiệc trẻ em", "quà tặng"]
    },
    {
        name: "Bánh bò thốt nốt (Hộp 250g)",
        price: 58500,
        originalPrice: 65000,
        image: "images/banh-bo.png",
        category: "banh-truyen-thong",
        keywords: ["bánh bò", "thốt nốt", "truyền thống", "miền tây"],
        description: "Bánh bò truyền thống miền Tây với nước cốt thốt nốt tự nhiên, vị ngọt nhẹ từ thốt nốt (không đường tinh luyện nhiều). Mềm xốp, không béo, healthy hơn bánh ngọt thông thường.",
        tags: ["truyền thống", "miền tây", "thốt nốt", "đặc sản", "ít ngọt", "không đường nhiều", "mềm xốp"],
        suitable: ["người lớn", "quà tặng", "đặc sản", "truyền thống", "ăn kiêng nhẹ"]
    },
    {
        name: "Bánh mì nướng bơ đường (3 lát)",
        price: 20000,
        originalPrice: 20000,
        image: "images/banh-mi.png",
        category: "banh-man",
        keywords: ["bánh mì nướng", "bơ đường", "giòn", "ngọt"],
        description: "Bánh mì nướng giòn tan với bơ và đường, vị ngọt dịu từ đường caramel hóa. Ngọt vừa, chứa đường nhưng không quá nhiều, phù hợp snack nhanh.",
        tags: ["giòn tan", "ngọt dịu", "bơ đường", "đơn giản", "có đường", "ngọt vừa", "không mặn"],
        suitable: ["bữa sáng", "trẻ em", "bữa phụ", "gia đình"]
    },
    {
        name: "Tiranama choco mận ổi hồng",
        price: 250000,
        originalPrice: 250000,
        image: "images/tiramisu.png",
        category: "banh-cao-cap",
        keywords: ["tiramisu", "choco", "mận ổi", "cao cấp", "sinh nhật"],
        description: "Tiramisu cao cấp với chocolate, mận và ổi hồng, vị ngọt đắng từ choco kết hợp chua ngọt trái cây. Ngọt vừa, không quá đường, cao cấp và tinh tế.",
        tags: ["cao cấp", "sinh nhật", "tiramisu", "đặc biệt", "ngọt vừa", "có đường", "chua ngọt", "không giòn"],
        suitable: ["sinh nhật", "kỷ niệm", "tiệc sang trọng", "quà tặng cao cấp"]
    }
];

function removeVietnameseTones(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}

class SmartSearchEngine {
    constructor() {
        this.products = productsData;

        this.searchPatterns = {
            sweetness: {
                'ngọt': ['ngọt', 'kem tươi', 'đường', 'ngọt dịu', 'ngọt vừa', 'rất ngọt'],
                'ít ngọt': ['ít ngọt', 'healthy', 'trái cây', 'không đường nhiều'],
                'không ngọt': ['mặn', 'savory', 'không ngọt', 'không đường']
            },
            audience: {
                'trẻ em': ['trẻ em', 'màu sắc', 'vui nhộn', 'sinh nhật', 'tiệc trẻ em'],
                'người lớn': ['người lớn', 'cao cấp', 'chocolate', 'đắng ngọt'],
                'gia đình': ['gia đình', 'hộp', 'chia sẻ']
            },
            occasion: {
                'sinh nhật': ['sinh nhật', 'tiệc', 'đặc biệt', 'cao cấp'],
                'bữa sáng': ['bữa sáng', 'bánh mì', 'giòn'],
                'tiệc': ['tiệc', 'sang trọng', 'cao cấp', 'quà tặng']
            },
            texture: {
                'giòn': ['giòn', 'giòn tan', 'giòn rụm'],
                'mềm': ['mềm', 'mềm mịn', 'mềm ẩm'],
                'kem': ['kem', 'kem tươi', 'béo ngậy']
            }
        };
    }

    analyzeSearchIntent(query) {
        const normalizedQuery = removeVietnameseTones(query.toLowerCase().trim());
        if (normalizedQuery.length < 2) return { directMatch: [], suggestions: [] };

        const terms = normalizedQuery.split(/\s+/);
        let positiveTerms = [];
        let negativeTerms = [];
        let priorityBoost = [];

        let i = 0;
        while (i < terms.length) {
            const current = terms[i];

            if ((current === 'khong' || current === 'khongco') && i + 1 < terms.length) {
                const negated = terms[i + 1];
                negativeTerms.push(negated);
                negativeTerms.push('duong', 'ngot', 'ratngot', 'codung');
                i += 2;
            }
            else if (current === 'it' && i + 1 < terms.length) {
                const lowTerm = terms[i + 1];
                positiveTerms.push(lowTerm);
                priorityBoost.push('itngot', 'itduong', 'khongduongnhieu', 'healthy');
                i += 2;
            }
            else if (current === 'cho' && i + 1 < terms.length) {
                const audience = terms[i + 1];
                positiveTerms.push(audience);
                if (audience === 'treem' || audience === 'tre') {
                    priorityBoost.push('treem', 'vuinon', 'mausac', 'sinnhat');
                }
                i += 2;
            }
            else {
                positiveTerms.push(current);
                i++;
            }
        }

        const results = [];

        this.products.forEach(product => {
            const norm = {
                name: removeVietnameseTones(product.name.toLowerCase()),
                keywords: product.keywords.map(k => removeVietnameseTones(k.toLowerCase())),
                tags: product.tags.map(t => removeVietnameseTones(t.toLowerCase())),
                suitable: product.suitable.map(s => removeVietnameseTones(s.toLowerCase())),
                desc: removeVietnameseTones(product.description.toLowerCase())
            };

            const hasNegative = negativeTerms.some(neg =>
                norm.tags.some(tag => tag.includes(neg)) ||
                norm.desc.includes(neg) ||
                norm.keywords.some(kw => kw.includes(neg))
            );
            if (hasNegative) return;

            let score = 0;

            priorityBoost.forEach(boost => {
                if (norm.tags.some(t => t.includes(boost)) || norm.suitable.some(s => s.includes(boost))) {
                    score += 60;
                }
            });

            positiveTerms.forEach(term => {
                if (norm.name.includes(term)) score += 50;
                if (norm.keywords.some(k => k.includes(term))) score += 40;
                if (norm.tags.some(t => t.includes(term))) score += 30;
                if (norm.suitable.some(s => s.includes(term))) score += 25;
                if (norm.desc.includes(term)) score += 15;
            });

            if (norm.tags.some(t => t.includes('itngot') || t.includes('khongngot') || t.includes('khongduong'))) {
                score += 40;
            }

            if (norm.suitable.some(s => s.includes('treem')) && norm.tags.some(t => t.includes('ngot') || t.includes('mausac'))) {
                score += 30;
            }

            if (score >= 30) {
                let matchType = 'Kết quả phù hợp';
                if (normalizedQuery.includes('khong')) matchType = 'Không chứa đường/ngọt mạnh';
                if (normalizedQuery.includes('it')) matchType = 'Ít ngọt';
                if (normalizedQuery.includes('tre em')) matchType = 'Phù hợp trẻ em';

                results.push({
                    ...product,
                    matchType,
                    relevance: score
                });
            }
        });

        results.sort((a, b) => b.relevance - a.relevance);

        if (results.length === 0) {
            this.products.forEach(product => {
                const fuzzyScore = this.fuzzyMatch(normalizedQuery, product);
                if (fuzzyScore > 40) {
                    results.push({
                        ...product,
                        matchType: 'Gợi ý gần giống',
                        relevance: fuzzyScore
                    });
                }
            });
            results.sort((a, b) => b.relevance - a.relevance);
        }

        return { directMatch: results, suggestions: [] };
    }

    fuzzyMatch(query, product) {
        let score = 0;
        const searchTerms = query.split(' ').filter(t => t.length > 1);

        searchTerms.forEach(term => {
            const normTerm = removeVietnameseTones(term);
            if (removeVietnameseTones(product.name.toLowerCase()).includes(normTerm)) score += 30;
            product.keywords.forEach(kw => {
                if (removeVietnameseTones(kw.toLowerCase()).includes(normTerm)) score += 20;
            });
            product.tags.forEach(tag => {
                if (removeVietnameseTones(tag.toLowerCase()).includes(normTerm)) score += 15;
            });
            if (removeVietnameseTones(product.description.toLowerCase()).includes(normTerm)) score += 10;
        });
        return score;
    }

    search(query) {
        if (!query || query.trim().length < 2) return [];

        const intent = this.analyzeSearchIntent(query);
        const allResults = [...intent.directMatch, ...intent.suggestions];

        const seen = new Set();
        const unique = allResults.filter(item => {
            if (seen.has(item.name)) return false;
            seen.add(item.name);
            return true;
        });

        return unique.slice(0, 10);
    }
}

const searchEngine = new SmartSearchEngine();

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
        this.loginModal?.addEventListener('click', e => e.target === this.loginModal && this.loginModal.classList.remove('open'));

        document.getElementById('close-register')?.addEventListener('click', () => this.registerModal.classList.remove('open'));
        this.registerModal?.addEventListener('click', e => e.target === this.registerModal && this.registerModal.classList.remove('open'));

        document.getElementById('close-change-password')?.addEventListener('click', () => this.changePasswordModal.classList.remove('open'));
        this.changePasswordModal?.addEventListener('click', e => e.target === this.changePasswordModal && this.changePasswordModal.classList.remove('open'));

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
                cart.notify('Tên đăng nhập/Email hoặc mật khẩu sai!');
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
            cart.notify('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (username.length < 3) {
            cart.notify('Tên đăng nhập phải có ít nhất 3 ký tự!');
            return;
        }

        if (!this.isValidEmail(email)) {
            cart.notify('Email không hợp lệ!');
            return;
        }

        if (password.length < 6) {
            cart.notify('Mật khẩu phải có ít nhất 6 ký tự!');
            return;
        }

        if (password !== confirmPassword) {
            cart.notify('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (username === 'admin' || this.registeredUsers.some(user => user.username === username)) {
            cart.notify('Tên đăng nhập đã tồn tại!');
            return;
        }

        if (email === 'admin@demo.com' || this.registeredUsers.some(user => user.email === email)) {
            cart.notify('Email đã được sử dụng!');
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

        cart.notify('Đăng ký thành công! Đang đăng nhập...');
        
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
            cart.notify('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (newPassword.length < 6) {
            cart.notify('Mật khẩu mới phải có ít nhất 6 ký tự!');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            cart.notify('Mật khẩu mới xác nhận không khớp!');
            return;
        }

        if (currentPassword === newPassword) {
            cart.notify('Mật khẩu mới phải khác mật khẩu hiện tại!');
            return;
        }

        const loginResult = this.validateLogin(this.username, currentPassword);
        if (!loginResult.success) {
            cart.notify('Mật khẩu hiện tại không đúng!');
            return;
        }

        if (this.username === 'admin') {
            cart.notify('Không thể đổi mật khẩu tài khoản demo!');
            return;
        }

        const userIndex = this.registeredUsers.findIndex(user => user.username === this.username);
        if (userIndex !== -1) {
            this.registeredUsers[userIndex].password = newPassword;
            localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
            
            cart.notify('Đổi mật khẩu thành công!');
            this.changePasswordModal.classList.remove('open');
            document.body.classList.remove('modal-open');
            document.getElementById('change-password-form').reset();
        } else {
            cart.notify('Có lỗi xảy ra, vui lòng thử lại!');
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
        cart.notify('Đăng nhập thành công!');
        cart.loadItems();
        
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
        cart.notify('Đăng xuất thành công!');
        cart.items = [];
        cart.render();
        
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

class SearchController {
    constructor() {
        this.searchIcon = document.getElementById('search-icon');
        this.searchDropdown = document.getElementById('search-dropdown');
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        
        this.init();
        this.setupClickOutside();
    }

    init() {
        this.searchIcon?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleSearch();
        });

        document.getElementById('search-btn')?.addEventListener('click', () => {
            this.performSearch(this.searchInput.value);
        });

        this.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(this.searchInput.value);
            }
        });

        this.searchInput?.addEventListener('input', (e) => {
            this.debounceSearch(e.target.value);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSearchAndReset();
            }
        });

        this.searchDropdown?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (!this.searchDropdown?.contains(e.target) && !this.searchIcon?.contains(e.target)) {
                this.closeSearchAndReset();
            }
        });
    }

    toggleSearch() {
        if (this.searchDropdown.classList.contains('open')) {
            this.closeSearchAndReset();
        } else {
            this.openSearch();
        }
    }

    openSearch() {
        this.searchDropdown.classList.add('open');
        setTimeout(() => {
            this.searchInput?.focus();
        }, 100);
    }

    closeSearchAndReset() {
        this.searchDropdown?.classList.remove('open');
        
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        
        this.hideResults();
    }

    debounceSearch(query) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            if (query.trim().length >= 2) {
                this.performSearch(query);
            } else {
                this.hideResults();
            }
        }, 300);
    }

    performSearch(query) {
        if (!query || query.trim().length < 2) {
            this.hideResults();
            return;
        }

        const results = searchEngine.search(query);
        this.displayResults(results);
    }

    displayResults(results) {
        if (!this.searchResults) return;

        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    Không tìm thấy sản phẩm phù hợp
                </div>
            `;
        } else {
            this.searchResults.innerHTML = results.map(product => `
                <div class="search-result-item" onclick="window.searchController.selectProduct('${product.name.replace(/'/g, "\\'")}')">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="search-result-info">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-price">
                            ${product.price.toLocaleString()}đ
                            ${product.originalPrice !== product.price ? 
                                `<span style="text-decoration: line-through; color: #999; font-size: 11px; margin-left: 5px;">${product.originalPrice.toLocaleString()}đ</span>` 
                                : ''
                            }
                        </div>
                        <div class="search-result-match">📍 ${product.matchType}</div>
                    </div>
                </div>
            `).join('');
        }

        this.searchResults.classList.add('show');
    }

    hideResults() {
        this.searchResults?.classList.remove('show');
    }

    selectProduct(productName) {
        this.closeSearchAndReset();
        
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        setTimeout(() => {
            this.navigateToProductSlide(productName);
        }, 800);
        
        cart.notify(`Đang tìm "${productName}"...`);
    }

    navigateToProductSlide(productName) {
        if (!window.productSlider) {
            cart.notify('Lỗi: Slider chưa sẵn sàng');
            return;
        }

        const slides = document.querySelectorAll('#view-all .swiper-slide');
        let targetSlideIndex = -1;
        
        slides.forEach((slide, index) => {
            const productTitle = slide.querySelector('.content h3');
            if (productTitle) {
                const currentProductName = productTitle.textContent.trim();
                
                if (currentProductName === productName) {
                    targetSlideIndex = index;
                }
            }
        });
        
        if (targetSlideIndex !== -1) {
            window.productSlider.slideTo(targetSlideIndex, 800);
            
            setTimeout(() => {
                const targetSlide = slides[targetSlideIndex];
                const targetBox = targetSlide?.querySelector('.box');
                
                if (targetBox) {
                    targetBox.style.transform = 'scale(1.08)';
                    targetBox.style.boxShadow = '0 15px 40px rgba(31, 47, 92, 0.4)';
                    targetBox.style.border = '3px solid #1f2f5c';
                    targetBox.style.transition = 'all 0.4s ease';
                    targetBox.style.zIndex = '10';
                    
                    cart.notify(`Đã tìm thấy "${productName}"!`);
                    
                    setTimeout(() => {
                        targetBox.style.transform = '';
                        targetBox.style.boxShadow = '';
                        targetBox.style.border = '';
                        targetBox.style.zIndex = '';
                    }, 4000);
                }
            }, 900);
        } else {
            cart.notify(`Không tìm thấy "${productName}" trong danh sách sản phẩm`);
        }
    }
}

const user = new UserManager();
const cart = new ShoppingCart();

class CategoryManager {
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

        cart.notify(`Đang xem: ${categoryNames[category]}`);
    }

    initCartButtons() {
        document.querySelectorAll('.cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (user.isLoggedIn) {
                    cart.add(btn.closest('.box'));
                } else {
                    cart.notify('Vui lòng đăng nhập để thêm vào giỏ hàng!');
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

const categoryManager = new CategoryManager();

class EnhancedSearchController extends SearchController {
    selectProduct(productName) {
        this.closeSearchAndReset();
        
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        setTimeout(() => {
            this.navigateToProduct(productName);
        }, 800);
        
        cart.notify(`Đang tìm "${productName}"...`);
    }

    navigateToProduct(productName) {
        const product = productsData.find(p => p.name === productName);
        
        if (product) {
            const productCategory = product.category;
            const currentCategory = categoryManager.getCurrentCategory();

            if (currentCategory === productCategory) {
                this.findInCurrentView(productName);
            } else if (currentCategory === 'all') {
                this.navigateToProductSlide(productName);
            } else {
                categoryManager.switchCategory(productCategory);
                setTimeout(() => {
                    this.findInCurrentView(productName);
                }, 300);
            }
        } else {
            categoryManager.switchCategory('all');
            setTimeout(() => {
                this.navigateToProductSlide(productName);
            }, 300);
        }
    }

    findInCurrentView(productName) {
        const currentCategory = categoryManager.getCurrentCategory();
        
        if (currentCategory === 'all') {
            this.navigateToProductSlide(productName);
            return true;
        } else {
            const categorySlider = categoryManager.getSlider(currentCategory);
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
                
                cart.notify(`Đã tìm thấy "${productName}"!`);
                
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

window.addEventListener('load', () => {
    window.searchController = new EnhancedSearchController();
});