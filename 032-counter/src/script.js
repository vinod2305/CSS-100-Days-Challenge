var number=  document.querySelector('.number')
var a=0;

document.querySelector('.minus').addEventListener('click', function(){
  updateNumber(-1);
  console.log("a");
})

document.querySelector('.plus').addEventListener('click', function(){
  updateNumber(1);
  console.log(number);
})

function updateNumber(value){
  a+= value;
  var x= number.getElementsByTagName('span');
  console.log(number.getElementsByTagName('span'));

  x.className= '';
   
  if (value > 0) { 
		x[x.length-1].insertAdjacentHTML("afterend", '<span class="fadeInDown">' + a + '</span>');
    x[x.length-2].classList=('fadeOutUp');
    x[x.length-1].classList=('fadeInUp');
    for(var i=0;i<nx.length-1;i++){
      x[i].style.display="none";
    }
	} else { // fadeDown Animation
  x[x.length-1].insertAdjacentHTML("afterend", '<span class="fadeInDown">' + a + '</span>');
    x[x.length-2].classList=('fadeOutDown');
    x[x.length-1].classList=('fadeInDown');
    for(var i=0;i<x.length-1;i++){
      x[i].style.display="none";
    }
	}
  
}


