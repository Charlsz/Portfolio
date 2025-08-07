// ===== GLOBAL VARIABLES =====
let isLoading = true;
let currentFilter = 'all';
let isMenuOpen = false;

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loadingScreen');
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-bar__fill');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen after a delay
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);
    
    // Initialize theme
    initializeTheme();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize project filters
    initializeProjectFilters();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize skill bar animations
    initializeSkillBars();
    
    console.log('Portfolio initialized successfully! 🚀');
}

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        isLoading = false;
        
        // Remove loading screen from DOM after transition
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle__icon');
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Header background on scroll
    window.addEventListener('scroll', updateHeaderBackground);
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (navMenu) {
        navMenu.classList.toggle('active', isMenuOpen);
    }
    
    if (navToggle) {
        navToggle.classList.toggle('active', isMenuOpen);
        navToggle.setAttribute('aria-expanded', isMenuOpen);
    }
}

function handleNavLinkClick(e) {
    const href = e.target.getAttribute('href');
    
    // Close mobile menu if open
    if (isMenuOpen) {
        toggleMobileMenu();
    }
    
    // Handle smooth scrolling for anchor links
    if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current nav link
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

function updateHeaderBackground() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        }
    }
}

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
}

function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
    e.target.classList.add('filter-btn--active');
    
    // Filter projects
    filterProjects(filter);
    currentFilter = filter;
}

function filterProjects(filter) {
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== FORM VALIDATION =====
function initializeFormValidation() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Validate all fields
    const isValid = validateForm(formObject);
    
    if (isValid) {
        submitForm(formObject);
    }
}

function validateForm(data) {
    let isValid = true;
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Por favor ingresa un email válido');
        isValid = false;
    }
    
    // Subject validation
    if (!data.subject || data.subject.trim().length < 3) {
        showFieldError('subject', 'El asunto debe tener al menos 3 caracteres');
        isValid = false;
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(fieldName);
    
    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                showFieldError(fieldName, 'El nombre debe tener al menos 2 caracteres');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(fieldName, 'Por favor ingresa un email válido');
            }
            break;
        case 'subject':
            if (value.length < 3) {
                showFieldError(fieldName, 'El asunto debe tener al menos 3 caracteres');
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(fieldName, 'El mensaje debe tener al menos 10 caracteres');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    if (field && errorElement) {
        field.style.borderColor = '#ef4444';
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearFieldError(fieldName) {
    const field = typeof fieldName === 'string' ? document.getElementById(fieldName) : fieldName.target;
    const errorElement = document.getElementById(`${field.name || fieldName}-error`);
    
    if (field && errorElement) {
        field.style.borderColor = '';
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function submitForm(data) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('form-success');
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        // Hide loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        
        // Show success message
        if (successMessage) {
            successMessage.classList.add('show');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
        
        // Reset form
        contactForm.reset();
        
        console.log('Form submitted:', data);
        
        // In a real application, you would send the data to your server here
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
        
    }, 2000);
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SKILL BAR ANIMATIONS =====
function initializeSkillBars() {
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    }
}

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// ===== UTILITY FUNCTIONS =====
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
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce scroll events for better performance
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));
window.addEventListener('scroll', throttle(updateHeaderBackground, 100));

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && isMenuOpen) {
        toggleMobileMenu();
    }
    
    // Skip to main content with Tab key
    if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.focus();
        }
    }
});

// Focus management for mobile menu
navLinks.forEach(link => {
    link.addEventListener('focus', () => {
        if (window.innerWidth <= 768 && !isMenuOpen) {
            toggleMobileMenu();
        }
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Hide loading screen if there's an error during initialization
    if (isLoading) {
        hideLoadingScreen();
    }
});

// ===== LAZY LOADING FOR IMAGES =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ANALYTICS & TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
    
    // Example: Custom analytics
    // analytics.track(eventName, eventData);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Track button clicks
    if (target.classList.contains('btn')) {
        trackEvent('button_click', {
            button_text: target.textContent.trim(),
            button_type: target.className
        });
    }
    
    // Track project card clicks
    if (target.closest('.project-card')) {
        const projectTitle = target.closest('.project-card').querySelector('.project-card__title').textContent;
        trackEvent('project_view', {
            project_name: projectTitle
        });
    }
    
    // Track social link clicks
    if (target.closest('.social-link')) {
        const href = target.closest('.social-link').href;
        trackEvent('social_click', {
            platform: href.includes('github') ? 'github' : href.includes('linkedin') ? 'linkedin' : 'email'
        });
    }
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
🚀 Welcome to Carlos Galvis Portfolio!
📧 Contact: cgalvis21_@hotmail.com
🔗 GitHub: https://github.com/Charlsz
💼 LinkedIn: https://www.linkedin.com/in/cgalvisp/

Built with ❤️ using vanilla JavaScript, HTML5, and CSS3
`);

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        toggleTheme,
        filterProjects,
        validateForm,
        trackEvent
    };
}