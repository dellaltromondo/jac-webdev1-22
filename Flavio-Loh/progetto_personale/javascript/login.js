
const form = document.getElementById('login-form');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!'); 
      window.location.href="../ProgettoPersonale.html";
      
    } else {
      alert('Invalid username or password');
    }
})
