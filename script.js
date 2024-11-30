document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 32; // Including margin
        container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        } else {
            const menu = document.createElement('div');
            menu.className = 'mobile-menu animate-fadeIn';
            menu.innerHTML = `
                <a href="#about" class="block px-4 py-2">About</a>
                <a href="#features" class="block px-4 py-2">Features</a>
                <a href="#nft" class="block px-4 py-2">NFT Gallery</a>
                <a href="#ecosystem" class="block px-4 py-2">Ecosystem</a>
            `;
            nav.appendChild(menu);
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
