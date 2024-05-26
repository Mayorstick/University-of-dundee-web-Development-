const myForm = document.getElementById('signUpForm')
const firstName = document.getElementById('firstName')
const LastName = document.getElementById('lastName')
const myEmail = document.getElementById('email')
const myPassword = document.getElementById('password')
const output = document.querySelector('.output')



myForm.addEventListener("submit", myLogin)

function myLogin(e) {
    e.preventDefault();

    const userDetails = 
        {
            firstName: firstName.value,
            LastName: LastName.value,
            email: myEmail.value,
            password: myPassword.value
        }
        
    
    localStorage.setItem("user", JSON.stringify(userDetails));
    if (firstName.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter first Name</div>'
    }
    else if(LastName.value.length ===0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Last Name</div>'
    }
    else if (myEmail.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Email Address</div>'
    }
    else if (myPassword.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter password</div>'
    }
    
    
    
    else if (LastName.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter password</div>'
    }
    else{
        output.innerHTML = '<div class="alert alert-success" role="alert">Congratulations! You have successfully registered </div>'
        window.location.href = "login.html" 
    }
}