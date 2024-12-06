function checkPassword() {
    const correctPassword = "0601";
    const inputPassword = document.getElementById('password').value;
    console.log("Contra:", correctPassword)

    if (inputPassword === correctPassword) {
        document.getElementById('proceed').style.display = 'block';
    } else {
        alert("Contraseña incorrecta, intentalo de nuevo.");
    }
        
}