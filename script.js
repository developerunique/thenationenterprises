document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');
    const currentYearSpan = document.getElementById('current-year');

    // 1. Mobile Menu Toggle
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        const isExpanded = mainNav.classList.contains('open');
        
        if (isExpanded) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // 2. Set Current Year in Footer
    if(currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. Simple Active Link Highlighting
    const sections = document.querySelectorAll('main section'); 
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 4) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});