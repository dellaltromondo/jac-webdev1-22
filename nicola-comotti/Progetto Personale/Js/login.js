function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || username !== 'admin') {
        console.log('Username sconosciuto! Riprovare');
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.style.border = '5px solid red';
        passwordInput.style.border = '5px solid red';
        return;
    }
    if (!password || password !== 'segreto123') {
        console.log('Password errata! Riprovare');
        passwordInput.value = '';
        usernameInput.style.border = '1px solid #f5f5f5';
        passwordInput.style.border = '5px solid red';
        return;
    }

    window.location.href = "user-homepage.html";
}