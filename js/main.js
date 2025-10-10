/* 
=========================================
iDigital - Main JavaScript
=========================================
Interactive functionality and navigation
*/

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initTypingEffect();
    initParallax();
    initContactForm();
    initScrollToTop();
    initLazyLoading();
    initPageTransitions();
    initAppleSearch();
});

/* ===== NAVIGATION ===== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Mobile menu toggle - CRITICAL FIX
    console.log('Initializing mobile menu...', { hamburger: !!hamburger, navMenu: !!navMenu });
    
    if (hamburger && navMenu) {
        // Force hamburger to be visible on mobile
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'flex';
        }
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked!');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            console.log('Menu state:', {
                hamburgerActive: hamburger.classList.contains('active'),
                menuActive: navMenu.classList.contains('active'),
                bodyMenuOpen: document.body.classList.contains('menu-open')
            });
        });
        
        // Ensure menu works on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'flex';
            } else {
                hamburger.style.display = 'none';
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    } else {
        console.error('CRITICAL: Hamburger or nav menu not found!', {
            hamburger: hamburger,
            navMenu: navMenu,
            hamburgerElement: document.getElementById('hamburger'),
            navMenuElement: document.getElementById('nav-menu')
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
    
    // Handle dropdown menus on mobile
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
    
    // Close mobile menu when clicking on navigation links (not dropdowns)
    const regularNavLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    regularNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ===== SCROLL EFFECTS ===== */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Counter animation
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));
    
    // Observe counter elements
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counter.classList.add('scroll-animate');
        observer.observe(counter);
    });
}

/* ===== ANIMATIONS ===== */
function initAnimations() {
    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Tech logos animation
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach((logo, index) => {
        logo.style.animationDelay = `${index * 0.1}s`;
        logo.classList.add('fade-in-up');
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/* ===== COUNTER ANIMATION ===== */
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current) + element.textContent.replace(/[\d]/g, '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.textContent.replace(/[\d]+/, target);
        }
    };
    
    updateCounter();
}

/* ===== TYPING EFFECT ===== */
function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-typing');
        const speed = parseInt(element.getAttribute('data-speed')) || 100;
        let index = 0;
        
        element.textContent = '';
        
        const typeText = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, speed);
            }
        };
        
        // Start typing when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeText();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

/* ===== PARALLAX EFFECTS ===== */
function initParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
    const contactForms = document.querySelectorAll('form[data-contact]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const formData = new FormData(form);
            let isValid = true;
            const errors = [];
            
            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    errors.push(`${field.name} is required`);
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validate email
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    errors.push('Please enter a valid email address');
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual endpoint)
                setTimeout(() => {
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                showNotification(errors.join(', '), 'error');
            }
        });
    });
}

/* ===== SCROLL TO TOP ===== */
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===== LAZY LOADING ===== */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

/* ===== UTILITY FUNCTIONS ===== */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    const autoHide = setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoHide);
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ===== PERFORMANCE OPTIMIZATIONS ===== */
// Throttle scroll events for better performance
const throttledScroll = throttle(() => {
    // Update navbar state
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update scroll to top button
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
}, 16);

window.addEventListener('scroll', throttledScroll);

/* ===== ACCESSIBILITY ENHANCEMENTS ===== */
// Keyboard navigation for dropdowns
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close all dropdowns and mobile menu
        const dropdowns = document.querySelectorAll('.dropdown.active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Focus management for mobile menu
document.addEventListener('focusin', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== hamburger) {
        hamburger.focus();
    }
});

/* ===== SERVICE WORKER REGISTRATION ===== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

/* ===== PAGE TRANSITIONS ===== */
function initPageTransitions() {
    // Create page transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'page-transition';
    transitionOverlay.innerHTML = `
        <div class="page-transition-content">
            <div class="page-transition-logo">iDigital</div>
            <div class="page-transition-spinner"></div>
        </div>
    `;
    document.body.appendChild(transitionOverlay);

    // Add transition to all internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], a[href^="pages/"], a[href^="index.html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash link or empty
            if (!href || href === '#' || href.startsWith('#')) return;
            
            e.preventDefault();
            
            // Show transition
            transitionOverlay.classList.add('active');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });

    // Hide transition on page load
    setTimeout(() => {
        transitionOverlay.classList.remove('active');
    }, 100);
}

/* ===== APPLE-STYLE SEARCH ===== */
function initAppleSearch() {
    // Create search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
        <div class="search-container">
            <div class="search-input-container">
                <input type="text" class="search-input" placeholder="Search iDigital..." autocomplete="off">
                <button class="search-close">&times;</button>
            </div>
            <div class="search-results"></div>
        </div>
    `;
    document.body.appendChild(searchOverlay);

    // Add search trigger to navigation
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
        const searchTrigger = document.createElement('button');
        searchTrigger.className = 'search-trigger';
        searchTrigger.innerHTML = '<i class="fas fa-search"></i>';
        searchTrigger.title = 'Search (Ctrl+K)';
        navCta.appendChild(searchTrigger);

        // Open search on trigger click
        searchTrigger.addEventListener('click', openSearch);
    }

    // Search functionality
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchResults = searchOverlay.querySelector('.search-results');
    const searchClose = searchOverlay.querySelector('.search-close');

    // Search data
    const searchData = [
        { title: 'Windows Development', description: 'Native Windows applications with .NET and WPF', url: 'pages/windows-development.html' },
        { title: 'Mobile Development', description: 'iOS and Android applications', url: 'pages/mobile-development.html' },
        { title: 'Web Development', description: 'Modern web applications with React and Node.js', url: 'pages/web-development.html' },
        { title: 'AI Services', description: 'Machine learning solutions', url: 'pages/ai-services.html' },
        { title: 'Cloud Services', description: 'AWS, Azure, and Google Cloud solutions', url: 'pages/cloud-services.html' },
        { title: 'Federal Government', description: 'GSA approved contractor', url: 'pages/industries.html' },
        { title: 'Defense & Military', description: 'DOD active approval', url: 'pages/industries.html' },
        { title: 'Portfolio', description: 'Our latest projects', url: 'pages/portfolio.html' },
        { title: 'About Us', description: 'Learn about our team', url: 'pages/about.html' },
        { title: 'Careers', description: 'Join our team', url: 'pages/careers.html' },
        { title: 'Blog', description: 'Tech insights', url: 'pages/blog.html' },
        { title: 'Contact', description: 'Get in touch', url: 'pages/contact.html' }
    ];

    function openSearch() {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    }

    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('visible');
    }

    function performSearch(query) {
        if (!query.trim()) {
            searchResults.classList.remove('visible');
            return;
        }

        const results = searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" data-url="${result.url}">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-description">${result.description}</div>
                </div>
            `).join('');

            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    closeSearch();
                    
                    const transitionOverlay = document.querySelector('.page-transition');
                    transitionOverlay.classList.add('active');
                    setTimeout(() => {
                        window.location.href = url;
                    }, 600);
                });
            });

            searchResults.classList.add('visible');
        } else {
            searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">No results found</div></div>';
            searchResults.classList.add('visible');
        }
    }

    // Event listeners
    searchClose.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });

    searchOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSearch();
        }
    });
}