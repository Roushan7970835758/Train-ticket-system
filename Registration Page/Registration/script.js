
function register(event) {
  event.preventDefault(); // Prevents the form from submitting for demonstration purposes

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const aadhar = document.getElementById('aadhar').value;

  // Validate the registration form
  if (!username || !password || !confirmPassword || !email || !mobile || !aadhar) {
    alert('Please fill out all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match.');
    return;
  }

  // Implement registration logic here (you would typically send a request to the server)
  alert('Registration successful! Redirecting to login page.');
  // You can redirect to the login page or any other page here
}

function validateForm() {
  const password = document.getElementById('password').value;

  if (password.length < 8) {
    alert('Password should be at least 8 characters long.');
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert('Password should contain at least 1 special character.');
    return false;
  }

  if (!/\d/.test(password)) {
    alert('Password should contain at least 1 number character.');
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    alert('Password should contain at least 1 uppercase character.');
    return false;
  }

  return true;
}
