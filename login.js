const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Form submission event listeners
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle the signup form submission
    alert('Sign up form submitted!');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle the login form submission
    alert('Login form submitted!');
});