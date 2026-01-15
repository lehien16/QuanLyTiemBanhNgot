import { productsData } from '../data/products.js';
import { removeVietnameseTones } from '../utils/vietnamese.js';

export class SmartSearchEngine {
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