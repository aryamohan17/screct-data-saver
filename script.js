
var forms = document.getElementById("forms");

// full name
// errors
var nameError = document.getElementById("name_error")

function validName() {
   var names = document.getElementById("names").value;
   if(names.length==0){
      nameError.innerHTML="Name is required";
      return false;
   }
   if(!names.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)){
      nameError.innerHTML="Write full name"
      return false;
   }
   nameError.innerHTML='';
   return true;
}

function emailValidation() {
   var uEmail = document.getElementById("emails").value;

   var email_error = document.getElementById("email_error");
   if(uEmail.length==0){
      email_error.innerHTML="Email required"
      return false;
   }

   if(!uEmail.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)))
   {
      email_error.innerHTML="Please enter a valid input";
      return false;

   }
   else{
      email_error.innerHTML=""
      return true;
   }
}
function passwordValidation() {
   var password = document.getElementById("pass").value;
   var password_error = document.getElementById("password_error");
   if(password.length==0){
      password_error.innerHTML="Password required"
      return false;
   }
   else{
      password_error.innerHTML=""
      return true
   }


}
// forms.addEventListener('submit',function register(event) {
   // event.preventDefault()
   function register() { 
   uName = names.value;
   uEmail = emails.value;
   uPass = pass.value;
      var btn_error = document.getElementById("btn_error");
  if(!validName() && !passwordValidation() && !emailValidation()){
      btn_error.style.display='none'
      btn_error.innerHTML=`${alert("please fill all the field")}`
      return false;
      console.log(uName,uEmail,uPass);
  }
 else if(uEmail in localStorage){
   alert("user already exist here")
}
else{
   dataSave = {uName,uEmail,uPass}
   localStorage.setItem(uEmail,JSON.stringify(dataSave))
   window.location.assign("home.html")

   alert("Register successfully")
   // return true;

   // window.location="home.html"
}

  
   
}
