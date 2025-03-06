function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let strength = 0;

    if (password.length >= 8) strength++; 
    if (/[A-Z]/.test(password)) strength++; 
    if (/[0-9]/.test(password)) strength++; 
    if (/[\W_]/.test(password)) strength++; 

    let feedback = ["Too Short", "Weak", "Moderate", "Strong", "Very Strong"];
    result.textContent = "Password Strength: " + feedback[strength];
}
