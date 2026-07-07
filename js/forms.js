// ============================================
// FORMS - NEWSLETTER & CONTACT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                alert(`Thank you for subscribing to V Interior newsletter! We'll send design inspiration to ${email}`);
                this.reset();
            }
        });
    }
    
    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting V Interior! Our design team will reach out within 24 hours.');
            this.reset();
        });
    }
});