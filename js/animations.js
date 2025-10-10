/* 
=========================================
iDigital - Animations JavaScript
=========================================
Advanced animations and visual effects
*/

// Animation state management
let animationState = {
    isReduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    observer: null,
    animations: new Map()
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    checkReducedMotion();
    initScrollAnimations();
    initHeroAnimations();
    initServiceCardAnimations();
    initTechStackAnimations();
    initLoadingAnimations();
    initHoverEffects();
    initParticleEffect();
    initTypingAnimation();
});

/* ===== REDUCED MOTION CHECK ===== */
function checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    mediaQuery.addEventListener('change', function() {
        animationState.isReduced = mediaQuery.matches;
        if (animationState.isReduced) {
            disableAnimations();
        } else {
            enableAnimations();
        }
    });
}

function disableAnimations() {
    document.body.classList.add('reduce-motion');
    // Clear any running animations
    animationState.animations.forEach(animation => {
        if (animation.cancel) animation.cancel();
    });
}

function enableAnimations() {
    document.body.classList.remove('reduce-motion');
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
    if (animationState.isReduced) return;
    
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
    };
    
    animationState.observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
            }
        });
    }, observerOptions);
    
    // Add elements to observe
    const elementsToAnimate = document.querySelectorAll(`
        .service-card,
        .feature-card,
        .tech-category,
        .section-header,
        .hero-content > *
    `);
    
    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.3s ease-out ${index * 0.05}s, transform 0.3s ease-out ${index * 0.05}s`;
        animationState.observer.observe(element);
    });
}

function animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

/* ===== HERO ANIMATIONS ===== */
function initHeroAnimations() {
    if (animationState.isReduced) return;
    
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    const heroStats = document.querySelector('.hero-stats');
    
    // Staggered animation for hero elements
    const heroElements = [heroTitle, heroSubtitle, heroCta, heroStats];
    
    heroElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 500); // Start after 500ms, stagger by 200ms
        }
    });
    
    // Animate floating elements
    animateFloatingElements();
}

function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 3;
        
        element.style.left = `${randomX}%`;
        element.style.top = `${randomY}%`;
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
        
        // Add pulse animation
        element.addEventListener('animationiteration', function() {
            this.style.opacity = 0.1 + Math.random() * 0.2;
        });
    });
}

/* ===== SERVICE CARD ANIMATIONS ===== */
function initServiceCardAnimations() {
    if (animationState.isReduced) return;
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        const link = card.querySelector('.service-link');
        
        // Hover animation
        card.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease-out';
            }
            
            if (link) {
                const arrow = link.querySelector('i');
                if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                }
            }
            
            // Subtle glow effect
            this.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
            
            if (link) {
                const arrow = link.querySelector('i');
                if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                }
            }
            
            this.style.boxShadow = '';
        });
        
        // Click animation
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                createRippleEffect(e, this);
            }
        });
    });
}

/* ===== TECH STACK ANIMATIONS ===== */
function initTechStackAnimations() {
    if (animationState.isReduced) return;
    
    const techCategories = document.querySelectorAll('.tech-category');
    
    techCategories.forEach(category => {
        const logos = category.querySelectorAll('.tech-logo');
        
        // Staggered animation for tech logos
        logos.forEach((logo, index) => {
            logo.style.opacity = '0';
            logo.style.transform = 'scale(0.8) translateY(20px)';
        });
        
        // Animate when category comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    logos.forEach((logo, index) => {
                        setTimeout(() => {
                            logo.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                            logo.style.opacity = '1';
                            logo.style.transform = 'scale(1) translateY(0)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(category);
        
        // Hover effects for individual logos
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) translateY(-5px)';
                this.style.transition = 'transform 0.2s ease-out';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
}

/* ===== LOADING ANIMATIONS ===== */
function initLoadingAnimations() {
    // Page load animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
        
        // Reveal page content
        document.body.classList.add('loaded');
    });
    
    // Button loading states
    const buttons = document.querySelectorAll('.btn[data-loading]');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                this.disabled = true;
                
                // Create loading spinner
                const spinner = document.createElement('span');
                spinner.className = 'btn-spinner';
                spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                this.prepend(spinner);
                
                // Reset after delay (for demo purposes)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.disabled = false;
                    spinner.remove();
                }, 2000);
            }
        });
    });
}

/* ===== HOVER EFFECTS ===== */
function initHoverEffects() {
    if (animationState.isReduced) return;
    
    // Button magnetic effect
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
    
    // Parallax cards
    const parallaxCards = document.querySelectorAll('.parallax-card');
    parallaxCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

/* ===== PARTICLE EFFECT ===== */
function initParticleEffect() {
    if (animationState.isReduced) return;
    
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;
    
    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        const x = Math.random() * window.innerWidth;
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            animation: particleFloat ${duration}s linear ${delay}s infinite;
        `;
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }
    
    // Create particles periodically
    const particleInterval = setInterval(() => {
        if (document.hidden || animationState.isReduced) return;
        createParticle();
        
        // Occasionally create a larger, glowing particle
        if (Math.random() > 0.7) {
            const glowParticle = document.createElement('div');
            glowParticle.className = 'particle';
            
            const size = Math.random() * 10 + 5;
            const x = Math.random() * window.innerWidth;
            const duration = Math.random() * 6 + 6;
            
            glowParticle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                background: radial-gradient(circle, rgba(0, 255, 127, 0.8) 0%, transparent 70%);
                box-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
                animation: particleFloat ${duration}s linear infinite;
            `;
            
            particleContainer.appendChild(glowParticle);
            
            setTimeout(() => {
                if (glowParticle.parentNode) {
                    glowParticle.parentNode.removeChild(glowParticle);
                }
            }, duration * 1000);
        }
    }, 300);
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(particleInterval);
    });
}

/* ===== UTILITY FUNCTIONS ===== */
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(0, 102, 204, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function animateCounter(element, target, duration = 2000) {
    if (animationState.isReduced) {
        element.textContent = target;
        return;
    }
    
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if ((increment > 0 && current < target) || (increment < 0 && current > target)) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

function staggerAnimation(elements, delay = 100, animation = 'fadeInUp') {
    if (animationState.isReduced) return;
    
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`;
        element.classList.add(animation);
    });
}

/* ===== CSS ANIMATIONS ===== */
// Add necessary CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
    }
    
    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes bounceIn {
        0% {
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .btn-spinner {
        margin-right: 8px;
    }
    
    .reduce-motion *,
    .reduce-motion *::before,
    .reduce-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .particles-container {
        overflow: hidden;
    }
    
    body.loaded .hero-content > * {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    body.loaded .service-card {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    body.loaded .service-card:nth-child(even) {
        animation-delay: 0.1s;
    }
    
    body.loaded .tech-logo {
        animation: bounceIn 0.6s ease-out forwards;
    }
`;

document.head.appendChild(animationStyles);

/* ===== PERFORMANCE MONITORING ===== */
function monitorPerformance() {
    // Monitor FPS
    let lastTime = performance.now();
    let frameCount = 0;
    
    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
            
            // Reduce animations if FPS is too low
            if (fps < 30) {
                document.body.classList.add('low-performance');
                disableAnimations();
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
    }
    
    measureFPS();
}

// Start performance monitoring
if (!animationState.isReduced) {
    monitorPerformance();
}

/* ===== TYPING ANIMATION ===== */
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) {
        console.log('Typing element not found!');
        return;
    }
    
    // Get text from translation or fallback
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const translations = {
        'en': 'Transform Your Vision Into Reality',
        'ar': 'حول رؤيتك إلى واقع',
        'es': 'Transforma Tu Visión en Realidad',
        'ru': 'Превратите Ваше Видение в Реальность',
        'tr': 'Vizyonunuzu Gerçeğe Dönüştürün',
        'pt': 'Transforme Sua Visão em Realidade',
        'ka': 'გადააქციეთ თქვენი ხედვა რეალობად'
    };
    
    const text = translations[currentLang] || translations['en'];
    let index = 0;
    
    console.log('Starting typing animation with text:', text);
    
    // Set initial styles
    typingElement.style.color = 'white';
    typingElement.style.borderRight = 'none';
    typingElement.style.paddingRight = '0';
    typingElement.style.animation = 'none';
    
    function typeText() {
        if (index < text.length) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeText, 100); // Typing speed
        } else {
            console.log('Typing animation complete');
            // No cursor needed after typing is complete
            typingElement.style.borderRight = 'none';
            typingElement.style.animation = 'none';
        }
    }
    
    // Clear any existing text and start typing
    typingElement.textContent = '';
    setTimeout(typeText, 1000); // Delay before starting
}

// Re-initialize typing animation when language changes
document.addEventListener('languageChanged', function() {
    initTypingAnimation();
});