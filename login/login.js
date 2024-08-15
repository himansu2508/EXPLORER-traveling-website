function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("passname").value;
if((username=="himanshu@gmail.com")&& (password=="gatepass")){
   alert("login succesfully");
    return false;
} 
else{
    alert("login failed");
}
}