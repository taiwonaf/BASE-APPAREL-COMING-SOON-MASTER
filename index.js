const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");
const bnt = document.getElementById("btn");
const errorLogo = document.getElementById("error-logo")

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

bnt.onclick = () => {
    
    if(email.value.match(validRegex)) {
        error.textContent = ""
        errorLogo.style.display = "none"
        
    } else {
        error.textContent = "Provide a valid email"
        errorLogo.style.display = "block"
    }
}
