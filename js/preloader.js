// ============================================
// PRELOADER - HIDE AFTER PAGE LOADS
// ============================================

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
        console.log('✅ Preloader hidden!');
    }, 1500);
});