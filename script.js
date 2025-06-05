document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset previous errors
    resetErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showError('nameError', 'Name is required');
        document.getElementById('name').classList.add('error');
        isValid = false;
    } else if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters');
        document.getElementById('name').classList.add('error');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('emailError', 'Email is required');
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showError('messageError', 'Message is required');
        document.getElementById('message').classList.add('error');
        isValid = false;
    } else if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
        document.getElementById('message').classList.add('error');
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        showSuccess();
    }
});

function showError(id, message) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.display = 'block';
}

function resetErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
    
    document.getElementById('successMessage').style.display = 'none';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you! Your message has been submitted successfully.';
    successMessage.style.display = 'block';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}