// JavaScript for Salsa Flubb' website

// Global variables
let isScrolled = false;
let mobileMenuOpen = false;

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populatePlanningSection();
    populateTestimonials();
    populateLocations();
    initializeContactForm();
    initializeScrollAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    
    // Handle scroll events for navbar styling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && !isScrolled) {
            navbar.classList.add('scrolled');
            isScrolled = true;
        } else if (window.scrollY <= 100 && isScrolled) {
            navbar.classList.remove('scrolled');
            isScrolled = false;
        }
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    closeMobileMenu();
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navToggle = document.querySelector('.nav-toggle i');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        navToggle.classList.remove('fa-bars');
        navToggle.classList.add('fa-times');
    } else {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('fa-times');
        navToggle.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navToggle = document.querySelector('.nav-toggle i');
    
    mobileMenuOpen = false;
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('fa-times');
    navToggle.classList.add('fa-bars');
}

// Populate planning section with class data
function populatePlanningSection() {
    const planningGrid = document.getElementById('planning-grid');
    
    salsaClasses.forEach(classItem => {
        const dayClass = classItem.day.toLowerCase();
        const cardElement = document.createElement('div');
        cardElement.className = `planning-card ${dayClass}`;
        
        cardElement.innerHTML = `
            <div class="planning-header">
                <h3>${classItem.day}</h3>
                <span class="venue-badge">${classItem.venue}</span>
            </div>
            <div class="class-list">
                ${classItem.classes.map(cls => `
                    <div class="class-item">
                        <div class="class-time">
                            <div class="time-info">
                                <i class="fas fa-clock"></i>
                                <span>${cls.time}</span>
                            </div>
                            <span class="badge badge-${getLevelClass(cls.level)}">${cls.level}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="location-info">
                <i class="fas fa-map-marker-alt"></i>
                <div class="location-details">
                    <p>${classItem.venue}</p>
                    <p>${classItem.address}</p>
                </div>
            </div>
        `;
        
        planningGrid.appendChild(cardElement);
    });
}

// Get CSS class for level badge
function getLevelClass(level) {
    const classes = {
        'Débutant': 'beginner',
        'Intermédiaire': 'intermediate',
        'Avancé': 'advanced',
        'Débutant & Inter': 'mixed'
    };
    return classes[level] || 'beginner';
}

// Populate testimonials section
function populateTestimonials() {
    const videoGrid = document.getElementById('video-grid');
    
    testimonials.videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-card';
        videoElement.onclick = () => openVideoModal(video.youtubeId);
        
        videoElement.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-overlay">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <div class="video-rating">
                    ${Array(5).fill('<i class="fas fa-star"></i>').join('')}
                </div>
            </div>
        `;
        
        videoGrid.appendChild(videoElement);
    });
}

// Video modal functionality
function openVideoModal(youtubeId) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');
    
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');
    
    iframe.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('video-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Populate locations section
function populateLocations() {
    const locationsList = document.getElementById('locations-list');
    
    // Get unique locations
    const uniqueLocations = salsaClasses.reduce((acc, classItem) => {
        const exists = acc.find(item => item.venue === classItem.venue);
        if (!exists) {
            acc.push(classItem);
        }
        return acc;
    }, []);
    
    uniqueLocations.forEach(location => {
        const locationElement = document.createElement('div');
        locationElement.className = 'location-item';
        locationElement.onclick = () => openLocation(location.address);
        
        locationElement.innerHTML = `
            <div class="location-item-content">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>${location.venue}</h4>
                    <p>${location.address}</p>
                    <button class="location-btn" onclick="event.stopPropagation(); openLocation('${location.address}')">
                        Voir sur la carte
                    </button>
                </div>
            </div>
        `;
        
        locationsList.appendChild(locationElement);
    });
}

// Open location in Google Maps
function openLocation(address) {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Mock form submission
        alert(`Merci ${formData.name} ! Votre message a été envoyé avec succès. Je vous répondrai bientôt à l'adresse ${formData.email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Open email client
function openEmailClient() {
    const subject = encodeURIComponent('Demande d\'information - Cours de Salsa');
    const body = encodeURIComponent('Bonjour Aurelien,\n\nJe suis intéressé(e) par vos cours de salsa.\n\nCordialement,');
    const email = contactInfo.email;
    
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
}

// Initialize scroll animations
function initializeScrollAnimations() {
    // Simple scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.planning-card, .feature-card, .video-card, .contact-card, .locations-card, .quick-contact');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility function to handle responsive behavior
function handleResize() {
    if (window.innerWidth > 768 && mobileMenuOpen) {
        closeMobileMenu();
    }
}

window.addEventListener('resize', handleResize);

// Handle escape key for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
        closeMobileMenu();
    }
});

// Add smooth scrolling behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100 && !isScrolled) {
        navbar.classList.add('scrolled');
        isScrolled = true;
    } else if (window.scrollY <= 100 && isScrolled) {
        navbar.classList.remove('scrolled');
        isScrolled = false;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

console.log('Salsa Flubb\' website loaded successfully! 🎉');