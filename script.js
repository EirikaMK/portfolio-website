// ===================================
// Eirika Manandhar Portfolio - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
});

// ===================================
// Navigation
// ===================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Update active link on scroll
    updateActiveNavLink();
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));
    handleScroll(); // Initial check
}

// ===================================
// Smooth Scrolling
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================

function initScrollAnimations() {
    // Add animation class to elements
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .timeline-item, ' +
        '.experience-card, .project-card, .research-content, ' +
        '.contact-card, .about-stats .stat, .finding'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay for grouped elements
                const parent = entry.target.parentElement;
                const siblings = parent.querySelectorAll('.animate-on-scroll');
                const index = Array.from(siblings).indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// Utility Functions
// ===================================

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ===================================
// Optional: Typing Effect for Hero
// ===================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===================================
// Optional: Parallax Effect for Hero
// ===================================

function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (!hero || !heroBg) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const yPos = scrolled * 0.3;
            heroBg.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// ===================================
// Console Easter Egg
// ===================================

console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code behind this portfolio?', 'font-size: 14px;');
console.log('%cCheck out the repository: https://github.com/EirikaMK/portfolio-website', 'font-size: 14px; color: #c4a35a;');
