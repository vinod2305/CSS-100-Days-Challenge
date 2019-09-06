
document.querySelector(".marker").addEventListener("click", function(){
console.log("a"); document.querySelector(".marker").classList.add("inactive"); document.querySelector(".card").classList.add("active");
})

document.querySelector(".card").addEventListener("click", function(){
console.log("a"); document.querySelector(".card").classList.remove("active"); document.querySelector(".marker").classList.remove("inactive");
})