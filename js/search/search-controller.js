export class SearchController {
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

        const results = window.searchEngine.search(query);
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
        
        window.cart.notify(`Đang tìm "${productName}"...`);
    }

    navigateToProductSlide(productName) {
        if (!window.productSlider) {
            window.cart.notify('Lỗi: Slider chưa sẵn sàng');
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
                    
                    window.cart.notify(`Đã tìm thấy "${productName}"!`);
                    
                    setTimeout(() => {
                        targetBox.style.transform = '';
                        targetBox.style.boxShadow = '';
                        targetBox.style.border = '';
                        targetBox.style.zIndex = '';
                    }, 4000);
                }
            }, 900);
        } else {
            window.cart.notify(`Không tìm thấy "${productName}" trong danh sách sản phẩm`);
        }
    }
}