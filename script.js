document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.style.transform = isMenuOpen ? 'translateY(0)' : 'translateY(-100%)';
    }

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-button')) {
            toggleMenu();
        }
    });

    // Карусель
    const carousel = document.querySelector('.carousel-wrapper');
    const cards = document.querySelectorAll('.nft-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Прокрутка карусели
    function updateCarousel(direction) {
        const cardWidth = cards[0].offsetWidth + 16; // Ширина карточки + gap
        currentIndex = direction === 'next' 
            ? Math.min(currentIndex + 1, cards.length - 1)
            : Math.max(currentIndex - 1, 0);
        
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }

    prevBtn.addEventListener('click', () => updateCarousel('prev'));
    nextBtn.addEventListener('click', () => updateCarousel('next'));

    // Адаптивность при изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel('current');
        }, 250);
    });
});
