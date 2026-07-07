// ============================================
// IMAGE MODAL / LIGHTBOX
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.querySelector('.image-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.querySelector('.modal-content img');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const body = document.body;

    if (!imageModal || !modalClose || !modalImage) return;

    function openModal(imageUrl, title, description) {
        modalImage.src = imageUrl;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        imageModal.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        imageModal.classList.remove('active');
        body.style.overflow = '';
    }

    portfolioCards.forEach(card => {
        card.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            if (imageUrl) openModal(imageUrl, title, description);
        });
    });

    modalClose.addEventListener('click', closeModal);
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeModal();
        }
    });
});