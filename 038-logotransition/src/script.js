var white=document.querySelector(".white");
var purple=document.querySelector(".purple");


document.querySelector(".frame").addEventListener("click",function(){
  white.classList.toggle("big");
  purple.classList.toggle("normal");
});