document.getElementById('submitButton').addEventListener('click', () => {
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    // Check for gender selection
    if (!gender) {
      alert('Please select your gender.');
      return;
    }
  
    // Password validation
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password is weak! Use at least 8 characters with uppercase, lowercase, numbers, and symbols.');
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Success message and redirect
    alert(' Welcome, ${fullName}! Registration successful.');
    window.location.href = 'home.html'; // Replace with your homepage URL
  });