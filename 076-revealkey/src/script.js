document.getElementById("input").addEventListener("keyup", myFunction);

function myFunction(){
  var input=document.getElementById("input").value;
  if(input=="password" || input=="Password")              
    document.getElementById("inputWrapper").classList.add("valid");
  else
    document.getElementById("inputWrapper").classList.remove("valid");
  }
