const scndsElt=document.getElementById("seconds");
const mscndsElt=document.getElementById("ms");
const startBtn=document.getElementById("startBtn");
const pauseBtn=document.getElementById("pauseBtn");
const resetBtn=document.getElementById("resetBtn");

let interval;
// using arrow function
startBtn.addEventListener("click",()=>{ 
interval = setInterval(startTimer,10)
}
)
let ms=0;
let s=0;
function startTimer(){
ms=ms+1;
if (ms<10){
    mscndsElt.innerHTML= "0" + ms ;
}
if (ms>10){
    mscndsElt.innerHTML=  ms ;
}
if (ms>99){
    ms=0;
    s=s+1;
    scndsElt.innerHTML= "0" + s ;
    mscndsElt.innerHTML=  "0" + "0";
}
if (s>10){
    scndsElt.innerHTML=  s ;
}
}

// creating pause button

pauseBtn.addEventListener("click",()=>{
    clearInterval(interval);
})

// creating pause button

// 2nd way of writing the fctn..... function reset(){...}
// 3rd way ........ ("click",reset) function reset(){..}
resetBtn.addEventListener("click",()=>{
ms=0;
s=0;
scndsElt.innerHTML= "0" + "0";
mscndsElt.innerHTML=  "0" + "0";
})

