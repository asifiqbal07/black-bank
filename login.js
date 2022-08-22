document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value; 
    
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;
    console.log(email, pass);

    if(email === 'admin@bb.com' && pass === 'adminpass'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Who the Fuchka are you?')
    }
})

