let formElement=document.getElementById("formcalculator");
let inputElement=document.getElementById("inputValue");
//select the all buttons
let buttonElement=document.querySelectorAll("button");

formElement.addEventListener("submit",function(event){
    event.preventDefault();
});
let result="";
let arrEle=Array.from(buttonElement);
arrEle.forEach(button=>{
    button.addEventListener("click",(event)=>{
        if (event.target.innerHTML==="="){
            result=eval(result);
            inputElement.value = result;
        }
        else if(event.target.innerHTML==="AC"){
            result="";
            inputElement.value=result;
        }else if(event.target.innerHTML==="DE"){
            result=result.substring(0,result.length-1);
            inputElement.value=result;
        }else{
            result+=event.target.innerHTML;
            inputElement.value=result;
        }
    });
});
