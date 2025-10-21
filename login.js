const login=()=>{
    const username=document.getElementById('email').value
    const password=document.getElementById('password').value
    if(username=="Yogesh" && password=="1234"){
        alert("Login success")
    }else{
        alert("Invalid Credentials")
    }
}