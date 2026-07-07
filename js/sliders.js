// ============================================
// SLIDERS - SWIPER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. SERVICE SLIDER
    // ============================================
    const serviceSlider = new Swiper('.service-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.slider-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
        },
        on: {
            init: function() {
                console.log('Service slider initialized');
            },
        },
    });

    // ============================================
    // 2. TESTIMONIALS SLIDER
    // ============================================
    const testimonialSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
        },
    });

    console.log('✅ Sliders initialized!');
});