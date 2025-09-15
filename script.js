document.addEventListener('DOMContentLoaded', () => {

    // Set the current year in the footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Handle mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class to show/hide the menu
        mobileNav.classList.toggle('hidden');
        // Add classes for a slide-down animation
        mobileNav.classList.toggle('-translate-y-full');
        mobileNav.classList.toggle('opacity-0');
        mobileNav.classList.toggle('pointer-events-none');
        // This makes the menu visible and interactive
        if (mobileNav.classList.contains('hidden')) {
            mobileNav.classList.remove('flex');
        } else {
            mobileNav.classList.add('flex');
        }
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior (page refresh)
        e.preventDefault();

        // Get the form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.classList.remove('hidden');
            formMessage.classList.add('text-red-400');
            return;
        }

        // Log the data to the console (in a real app, this would be sent to a server)
        console.log('Form Submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Display a success message and reset the form
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.classList.remove('hidden', 'text-red-400');
        formMessage.classList.add('text-green-400');
        contactForm.reset();
    });
});
