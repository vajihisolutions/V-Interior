// ============================================
// MOBILE SIDEBAR TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    if (!mobileToggle || !mobileSidebar || !overlay) return;

    function toggleSidebar() {
        mobileToggle.classList.toggle('active');
        mobileSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
    }

    mobileToggle.addEventListener('click', toggleSidebar);
    
    overlay.addEventListener('click', function() {
        if (mobileSidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    document.querySelectorAll('.mobile-sidebar a').forEach(link => {
        link.addEventListener('click', function() {
            if (mobileSidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });
});