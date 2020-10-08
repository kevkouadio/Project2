//function to check username & password
function check(event)
{
    event.preventDefault();
 //the following code checkes whether the entered userid and password are matching
 if(event.target.form.username.value == "username" && event.target.form.Password.value == "password")
  {
    //opens the target page while Id & password matches
    window.location.href = '/blog.html';
  }
 else
 {
   //displays error message  
   alert("Incorrect Password or Username")
  }
}