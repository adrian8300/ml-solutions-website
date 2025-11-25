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
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formStatus = document.getElementById('formStatus');
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Disable submit button
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                // For testing/demo: Show success message immediately
                // In production, you would send this to your backend/email service

                // Example with FormSubmit.co (free service):
                // Replace 'your-email@example.com' with your actual email
                // const response = await fetch('https://formsubmit.co/your-email@example.com', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(formData)
                // });

                // For demo purposes, simulate a successful submission
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.';

                // Reset form
                contactForm.reset();

                // Log to console (for testing)
                console.log('Form data:', formData);
                console.log('Note: In production, integrate with FormSubmit.co, Formspree, or your own backend');

            } catch (error) {
                // Show error message
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Oops! Something went wrong. Please try again or email us directly.';
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
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
