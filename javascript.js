let display=document.querySelector("input");
const buttons=document.querySelectorAll("button");
let currentValue="";
buttons.forEach(element=>{
element.addEventListener("click",()=>{
    display.value=currentValue
    if(display.value==="="){
       currentValue=eval(display.value)}
    else if (display.value==="^"){
        display.value="";
    }

})
})