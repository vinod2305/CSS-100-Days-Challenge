/*var active=0;
var a=document.querySelectorAll(".card");

document.querySelector(".button").addEventListener("click", function(){
 a[active].classList.add("inactive"); 
  console.log("a");
 a[active].classList.remove("active");
  if(active==2){
    active=0;
  }
  active++;
  a[active].classList.add("active"); 
 a[active].classList.remove("inactive");
});

*/

let sliderImages = document.querySelectorAll(".card"),
  current = 0;


function a() {
   sliderImages[current].classList.add("inactive"); 
  console.log(current);
 sliderImages[current].classList.remove("active");
  if(current==2){
    current=0;
  }
  else{
  current++;
  }
 sliderImages[current].classList.add("active"); 
 sliderImages[current].classList.remove("inactive");
  
}