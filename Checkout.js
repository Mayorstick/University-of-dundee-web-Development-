const form = document.getElementById('checkout-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Hide the form and show the thank you message
    form.style.display = 'none';
    thankYou.style.display = 'block';
});
