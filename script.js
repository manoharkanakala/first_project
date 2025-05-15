// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.service-card, .portfolio-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add CSS for mobile navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links {
        display: flex;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            right: 0;
            height: 100vh;
            top: 0;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 50%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            z-index: 999;
        }
        
        .nav-active {
            transform: translateX(0%);
        }
        
        .nav-links li {
            opacity: 0;
        }
        
        .toggle span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .toggle span:nth-child(2) {
            opacity: 0;
        }
        
        .toggle span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .service-card, .portfolio-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style); 