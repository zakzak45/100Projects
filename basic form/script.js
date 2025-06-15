let name =document.getElementById("name")
let email =document.getElementById("email");
let message =document.getElementById("message");
let Reset =document.getElementById("Reset");
let Send =document.getElementById("send");








Reset.addEventListener('click',()=>{
document.getElementById('name').innerHTML= "";
document.getElementById('email').innerHTML="";
document.getElementById('message').innerHTML="";
})

Send.addEventListener('click',()=>{

if(name.value==""){
alert("enter name");
}
else if(email.value ==""){
    alert("enter email")
}
else if(message.value==""){
   alert("enter a message")
}else{
    alert("send")
}

})