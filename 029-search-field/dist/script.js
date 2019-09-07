var searchfield=document.querySelector(".searchfield");
var suggestions=document.querySelector(".suggestions");

searchfield.addEventListener("keyup", function(){
  var text=searchfield.value;
  if(text.length){
    suggestions.innerHTML="";
    suggestions.classList.add("active");
    suggestions.innerHTML+="<li><b>"+text+"</b></li>";
    suggestions.innerHTML+="<li> Veritatis et <b>"+text+" </b></li>";
    suggestions.innerHTML+="<li> ut aliquid ex <b>"+text+" </b>vero eos</li>";
  }else{
    suggestions.innerHTML="";
    suggestions.classList.remove("active");
  }
});