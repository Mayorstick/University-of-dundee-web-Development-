const signUpButton = document.getElementById('signUpButton');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signUpClick = document.getElementById('signUpClick');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

signUpClick.addEventListener('click', function() {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
});


