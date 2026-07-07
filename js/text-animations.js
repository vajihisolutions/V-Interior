// ============================================
// TEXT ANIMATIONS - SPLIT TEXT
// ============================================

// ============================================
// 1. HERO TEXT ANIMATION (after preloader)
// ============================================
function runHeroAnimation() {
    const headingElement = document.getElementById('heroHeading');
    if (headingElement) {
        const text = headingElement.textContent;
        const words = text.split(' ');
        let html = '';
        words.forEach((word, index) => {
            const delayValue = 0.1 + (index * 0.1);
            html += `<span class="word-char" style="animation-delay: ${delayValue}s;">${word}</span>`;
            if (index < words.length - 1) html += ' ';
        });
        headingElement.innerHTML = html;
        console.log('✅ Hero text animation applied after preloader!');
    }
}

window.addEventListener('load', function() {
    setTimeout(runHeroAnimation, 2300);
});

// ============================================
// 2. ABOUT HEADING (scroll triggered)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    const aboutHeading = document.getElementById('aboutHeading');
    
    if (aboutSection && aboutHeading) {
        aboutHeading.style.opacity = '0';
        ScrollTrigger.create({
            trigger: aboutSection,
            start: 'top 85%',
            once: true,
            onEnter: function() {
                aboutHeading.style.opacity = '1';
                const text = aboutHeading.textContent;
                const words = text.split(' ');
                let html = '';
                words.forEach((word, index) => {
                    const delayValue = 0.1 + (index * 0.08);
                    html += `<span class="about-word" style="animation-delay: ${delayValue}s;">${word}</span>`;
                    if (index < words.length - 1) html += ' ';
                });
                aboutHeading.innerHTML = html;
                console.log('✅ About heading animation triggered on scroll!');
            }
        });
    }
});

// ============================================
// 3. SECTION HEADINGS (scroll triggered)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    function animateHeadingOnScroll(headingId, triggerSelector, delayBetweenWords) {
        const heading = document.getElementById(headingId);
        const trigger = document.querySelector(triggerSelector);
        if (!heading || !trigger) return;
        
        heading.style.opacity = '0';
        ScrollTrigger.create({
            trigger: trigger,
            start: 'top 85%',
            once: true,
            onEnter: function() {
                heading.style.opacity = '1';
                const text = heading.textContent;
                const words = text.split(' ');
                let html = '';
                words.forEach((word, index) => {
                    if (word.includes('<br>')) {
                        const parts = word.split('<br>');
                        parts.forEach((part, i) => {
                            if (part) {
                                const delay = (index + i * 0.5) * delayBetweenWords;
                                html += `<span class="section-word" style="animation-delay: ${delay}s;">${part}</span>`;
                            }
                            if (i < parts.length - 1) html += '<br>';
                        });
                    } else {
                        const delay = index * delayBetweenWords;
                        html += `<span class="section-word" style="animation-delay: ${delay}s;">${word}</span>`;
                    }
                    if (index < words.length - 1 && !word.includes('<br>')) html += ' ';
                });
                heading.innerHTML = html;
                console.log(`✅ ${headingId} animation triggered on scroll!`);
            }
        });
    }
    
    animateHeadingOnScroll('servicesHeading', '.service-section', 0.08);
    animateHeadingOnScroll('whyHeading', '.why-section', 0.08);
    animateHeadingOnScroll('portfolioHeading', '.portfolio-section', 0.08);
    animateHeadingOnScroll('testimonialsHeading', '.testimonials-section', 0.08);
    animateHeadingOnScroll('blogHeading', '.blog-section', 0.08);
    animateHeadingOnScroll('contactHeading', '.contact-section', 0.08);
    animateHeadingOnScroll('ctaHeading', '.cta-section', 0.08);
    
    console.log('✅ All section heading animations initialized!');
});