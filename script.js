// calling section

let navbar=document.querySelector(".navbar")
console.log(navbar)

// nav class
let nav=document.querySelector(".nav")
// btn menu
let count=0
let btn=document.querySelector("#btn-menu")
btn.addEventListener("click",function(){
   if(count==0){
    nav.classList.add("pirority")
    count++;
   }else{
    nav.classList.remove("pirority")
    count--;
   }
})


// input mouseover event
let input=document.querySelector("input")
input.addEventListener("mouseover", function(){
   
   input.style.backgroundColor="#D8DADC"
})
input.addEventListener("mouseout",function(){
   input.style.backgroundColor="initial"
})


// card1 
let btn1=document.querySelector("#btn1")
let card1=document.querySelector("#card1")
let a = 0;
btn1.addEventListener("click", function() {
   if (a === 0) {
      card1.style.transition = "transform 2s ease 0.2s";
      card1.style.transform = "scale(1.2)";
      card1.style.zIndex="100"
      setTimeout(() => {
         card1.style.transform = "scale(1)";
         card1.style.zIndex="1"
      }, 2000); 
      a++;
   } else {

      card1.style.transition = "transform 2s ease 0s";
      
      card1.style.transform = "scale(0.0)";
      setTimeout(() => {
         card1.style.transform = "scale(1)";
      }, 2000); 
      
      a--;
   }
});

btn.addEventListener("mouseover",function(){
   nav.classList.add("navbar-color")
})
//card2
let card2=document.querySelector("#card2")
let btn2=document.querySelector("#btn2")
let b=0;
btn2.addEventListener("click",function(){
   if(b==0){
      card2.style.transition="all 3s ease-in"
      card2.style.transform="rotate(360deg)"
   b++;
   }else{
      card2.style.transition="all 3s ease-in"
   card2.style.transform="rotate(0deg)" 
   b--;
   } 
})

//card3
let btn3=document.querySelector("#btn3")
let card3=document.querySelector("#card3")
let c=0;
btn3.addEventListener("click", function() {
   if (c == 0) {
      card3.style.transition = "transform 2s ease 0.2s";
      card3.style.transform = " skewy(30deg)";
      card3.style.zIndex="100"
      setTimeout(() => {
         card3.style.transform = "skewy(0deg)";
         card3.style.zIndex="1"
      }, 2000); 
      c++;
   } else {

      card3.style.transition = "transform 2s ease 0s";
      
      card3.style.transform = "skewx(30deg)";
      setTimeout(() => {
         card3.style.transform = "skewx(0deg)";
      }, 2000); 
      
      c--;
   }
});


// mode
let mode=document.querySelector("#mode")
let sun=document.querySelector(".fa-sun")
let moon=document.querySelector(".fa-moon")
let d=0;
mode.addEventListener("click",function(){
   if(d==0){
      document.querySelector("body").style.background="black"
      sun.style.display="block"
      moon.style.display="none"
      d++;
   }
   else{
      document.querySelector("body").style.background="white"
      moon.style.display="block"
      sun.style.display="none"
      d--;
   }
})


// circle 
let circle=document.querySelector(".circle");


// start btn 
let start=document.querySelector("#start")
start.addEventListener("click", function(){
   circle.style.animation="rotate .3s linear  infinite";
   circle.style.boxShadow="none"

})


// stop btn
let stop=document.querySelector("#stop")
stop.addEventListener("click", function(){
   circle.style.animation="none";
   circle.style.boxShadow="initial"

})

