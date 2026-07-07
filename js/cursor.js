// ============================================
// CUSTOM CURSOR - ONLY DOT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    const cursorDot = document.getElementById('cursorDot');
    if (!cursorDot) return;
    
    let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
    const dotSpeed = 0.15;
    
    // Track mouse
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor
    function animateCursor() {
        dotX += (mouseX - dotX) * dotSpeed;
        dotY += (mouseY - dotY) * dotSpeed;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll(
        'a, button, .cursor-hover, .service-card, .portfolio-card, ' +
        '.blog-card, .feature-row, .social-icon, .view-more-btn, ' +
        '.cta-btn, .lets-chat-btn, .about-btn, .contact-btn, ' +
        '.submit-btn, .scroll-top, .blog-read-more'
    );
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorDot.classList.add('active');
        });
        el.addEventListener('mouseleave', function() {
            cursorDot.classList.remove('active');
        });
    });
    
    console.log('✅ Custom cursor loaded!');
});

// Force cursor visible after everything loads
window.addEventListener('load', function() {
    setTimeout(function() {
        const cursorDot = document.getElementById('cursorDot');
        if (cursorDot) {
            cursorDot.style.display = 'block';
            cursorDot.style.opacity = '1';
            cursorDot.style.visibility = 'visible';
        }
    }, 500);
});