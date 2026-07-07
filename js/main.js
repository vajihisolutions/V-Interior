// ============================================
// V INTERIOR - MAIN INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 V Interior website loaded!');
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// BUTTON SMOOTH HOVER EFFECTS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-btn, .contact-btn, .lets-chat-btn, .view-more-btn, .submit-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(193, 106, 60, 0.3)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// ============================================
// SCROLL TO TOP - LIQUID FILL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollTop');
    const scrollCircle = document.getElementById('scrollCircle');
    if (!scrollBtn || !scrollCircle) return;
    
    const CIRCUMFERENCE = 157.08;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
        
        const dashOffset = CIRCUMFERENCE - (scrollPercent * CIRCUMFERENCE);
        scrollCircle.style.strokeDashoffset = dashOffset;
        
        if (scrollTop > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.dispatchEvent(new Event('scroll'));
});

// ============================================
// IMAGE PRELOADING (Service & Portfolio)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    function preloadBackgroundImages(elements) {
        elements.forEach(el => {
            el.style.opacity = '0.1';
            el.style.transition = 'opacity 0.4s ease';
            
            const bgImage = window.getComputedStyle(el).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                const url = bgImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                if (url) {
                    const img = new Image();
                    img.onload = function() {
                        el.style.opacity = '1';
                        el.classList.add('image-loaded');
                    };
                    img.onerror = function() {
                        el.style.opacity = '1';
                    };
                    img.src = url;
                } else {
                    el.style.opacity = '1';
                }
            } else {
                el.style.opacity = '1';
            }
        });
    }
    
    const serviceCards = document.querySelectorAll('.service-slider .service-card');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    if (serviceCards.length) preloadBackgroundImages(serviceCards);
    if (portfolioCards.length) preloadBackgroundImages(portfolioCards);
    
    console.log('✅ Images preloaded!');
});

console.log('✅ V Interior website loaded successfully!');