// ============================================
// SCROLL EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. CARD REVEAL - Intersection Observer
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-card, .review-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // ============================================
    // 2. STATS COUNTER ANIMATION
    // ============================================
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (target === 98 ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
            }
        }, 30);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                animateCounter(statNumbers[0], 300);
                animateCounter(statNumbers[1], 98);
                animateCounter(statNumbers[2], 15);
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsBox = document.querySelector('.stats-box');
    if (statsBox) {
        statsObserver.observe(statsBox);
    }

    // ============================================
    // 3. CTA PARALLAX EFFECT
    // ============================================
    const ctaContainer = document.querySelector('.cta-container');
    if (ctaContainer) {
        window.addEventListener('scroll', function() {
            const rect = ctaContainer.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrolled = window.pageYOffset - ctaContainer.offsetTop;
                ctaContainer.style.backgroundPosition = `center ${scrolled * 0.5}px`;
            }
        });
    }

    // ============================================
    // 4. ACTIVE NAVIGATION STATE
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // 5. SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // 6. SERVICE CARD HOVER EFFECTS
    // ============================================
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // ============================================
    // 7. REVIEW CARD CLICK
    // ============================================
    document.querySelectorAll('.review-card').forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.reviewer-name').textContent;
            const title = this.querySelector('.reviewer-title').textContent;
            alert(`${name}\n${title}\n\nFull testimonial and project details would be available in a complete case study section.`);
        });
    });

    // ============================================
    // 8. SERVICE ARROW CLICK
    // ============================================
    document.querySelectorAll('.service-arrow').forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            const serviceTitle = this.closest('.service-card').querySelector('.service-title').textContent;
            alert(`Service details for: ${serviceTitle}\n\nThis would navigate to a detailed service page with pricing, process, and portfolio examples.`);
        });
    });

    // ============================================
    // 9. BUTTON CLICK HANDLERS
    // ============================================
    document.querySelectorAll('.cta-btn, .lets-chat-btn, .view-more-btn, .submit-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('submit-btn')) return;
            e.preventDefault();
            const buttonText = this.textContent;
            
            if (buttonText.includes('Begin Your Design Journey') || buttonText.includes('Start Your Project')) {
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            } else if (buttonText.includes('View Our Portfolio')) {
                alert('This would navigate to a full portfolio gallery page with more projects.');
            } else {
                alert('This feature would navigate to the appropriate section in a complete website.');
            }
        });
    });

    console.log('✅ Scroll effects initialized!');
});