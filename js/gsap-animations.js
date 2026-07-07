// ============================================
// GSAP + SCROLLTRIGGER - ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
    
    // ============================================
    // 1. STATS COUNTER ANIMATION (Hero)
    // ============================================
    const statsBox = document.querySelector('.stats-box');
    if (statsBox) {
        ScrollTrigger.create({
            trigger: statsBox,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                const numbers = statsBox.querySelectorAll('.stat-number');
                numbers.forEach((num, index) => {
                    const target = parseInt(num.textContent);
                    gsap.fromTo(num, 
                        { textContent: 0 },
                        { 
                            textContent: target,
                            duration: 2,
                            ease: 'power2.out',
                            delay: index * 0.3,
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                const val = Math.floor(this.targets()[0].textContent);
                                num.textContent = val + (target === 98 ? '%' : '+');
                            }
                        }
                    );
                });
            }
        });
    }
    
    // ============================================
    // 2. ABOUT SECTION - STAGGERED FADE
    // ============================================
    const aboutElements = document.querySelectorAll('.about-content .section-tag, .about-content .section-title, .about-content p, .about-features, .about-btn');
    aboutElements.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
    
    // About image - slide from left
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: aboutImage,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -60,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // ============================================
    // 3. WHY CHOOSE US - ALTERNATE SLIDE
    // ============================================
    const featureRows = document.querySelectorAll('.feature-row');
    featureRows.forEach((row, index) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: 'top 92%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -40 : 40,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Why image
    const whyImage = document.querySelector('.ship-frame');
    if (whyImage) {
        gsap.from(whyImage, {
            scrollTrigger: {
                trigger: whyImage,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // ============================================
    // 4. TESTIMONIALS - STAGGERED
    // ============================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
    
    // ============================================
    // 5. BLOG - STAGGERED
    // ============================================
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
    
    // ============================================
    // 6. CONTACT - FADE + SLIDE
    // ============================================
    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer) {
        gsap.from(contactContainer, {
            scrollTrigger: {
                trigger: contactContainer,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // ============================================
    // 7. CTA - SCALE + FADE
    // ============================================
    const ctaContainer = document.querySelector('.cta-container');
    if (ctaContainer) {
        gsap.from(ctaContainer, {
            scrollTrigger: {
                trigger: ctaContainer,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    console.log('✅ GSAP Scroll animations added!');
});