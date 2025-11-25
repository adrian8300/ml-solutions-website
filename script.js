// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Contact Form Handling
    // Form now submits directly to FormSubmit.co
    // The form action is set in contact.html to handle submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Check if redirected back with success parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            const formStatus = document.getElementById('formStatus');
            if (formStatus) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
                formStatus.style.display = 'block';

                // Clear the URL parameter
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }

        contactForm.addEventListener('submit', function() {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Form will submit normally to FormSubmit.co
            // User will be redirected back with success parameter
        });
    }

    // Smooth scrolling for anchor links
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
});
