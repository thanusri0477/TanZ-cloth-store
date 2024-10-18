document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more checks)
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate login logic
    if (email === 'test@tanz.com' && password === '123456') {
        alert('Login successful');
        // Redirect to another page or do further processing
    } else {
        alert('Invalid email or password');
    }
});
