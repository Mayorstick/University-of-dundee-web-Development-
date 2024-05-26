const myForm = document.getElementById('signInForm')
const myEmail = document.getElementById('email')
const myPassword = document.getElementById('password')
const output = document.querySelector('.output')




myForm.addEventListener("submit", function(e){
    e.preventDefault()

    console.log(myEmail.value)
    if(myEmail.value === 0 || myPassword.value.length ===0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Field can not be empty</div>'
    }
    else {
        if (JSON.parse(localStorage.getItem("user"))) {
            let userme = JSON.parse(window.localStorage.getItem('user'));

            if (userme.email === email.value && userme.password === password.value) {
                output.innerHTML = '<div class="alert alert-success" role="alert">Congratulations! you have successfully login</div>'
             
                window.location.href = "home.html"
            }
            else {
                output.innerHTML = '<div class="alert alert-danger" role="alert">invalid Credentials</div>'

            }
        } 
    }
})
