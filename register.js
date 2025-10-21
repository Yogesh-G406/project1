const register = () => {
    const fullname = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm = document.getElementById('confirm').value
    if(confirm==password){
        alert(`${fullname} your Registeration Successful`)

    }else{
        alert(`wrong password`)
    }
}