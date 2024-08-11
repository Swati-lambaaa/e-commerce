let cartCount = 0;
const cartCounter = document.querySelector('.cart');

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCounter.textContent = `Cart (${cartCount})`;
        alert('Product added to cart!');
    });
});

// CTA Button Alert
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Welcome to Penguine! Happy Shopping!');
});

// Mobile Navigation Toggle
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.className = 'nav-toggle';

document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Product Filtering
const categories = document.querySelectorAll('.category-card');
const products = document.querySelectorAll('.product-card');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.querySelector('h3').textContent.toLowerCase();

        products.forEach(product => {
            const productCategory = product.querySelector('h3').textContent.toLowerCase();

            if (productCategory.includes(selectedCategory) || selectedCategory === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter form');
const emailInput = document.querySelector('.newsletter input');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}