    // 1. Get the elements from the DOM
const passwordInput = document.getElementById('password');
const strengthSpan = document.getElementById('Strength');

// 2. Adding the event listener
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let strength = 'Weak'; 
    let messageColor = 'red'; 

    // factors used for checking strength
    if (password.length === 0) {
        strength = 'Waiting...';
        messageColor = 'gray';
    } 
    else if (password.length < 6) {
        strength = 'Very Weak';
        messageColor = 'darkred';
    } 
    else if (password.length < 8) {
        strength = 'Weak';
        messageColor = 'red';
    } 
    else {
        // where password is 8+ characters, we check complexity.
        const hasLetters = /[A-Za-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasLetters && hasNumbers && hasSpecial && password.length >= 10) {
            strength = 'Very Strong';
            messageColor = 'green';
  } 
        else if (hasLetters && hasNumbers) {
            strength = 'Strong';
            messageColor = 'darkgreen';
        } 
        else {
            strength = 'Medium';
            messageColor = 'orange';
        }
    }

    // 3. Update the UI correctly
    strengthSpan.textContent = strength;
    strengthSpan.style.color = messageColor;

    console.log(`Length: ${password.length} | Strength: ${strength}`);
});                                                                                      