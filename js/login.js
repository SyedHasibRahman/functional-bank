document.getElementById('login-submit').addEventListener('click', function () {
    // Get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // Get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    // Check email & password
    if (userEmail == 'isyedhasib@gmail.com' && userPassword == 123) {
        window.location.href = 'banking.html';
    } else {
        alert('Not a valid user');
    }
});
