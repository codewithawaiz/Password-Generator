let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox")
let lowercase=document.getElementById("lowercase")
let uppercase=document.getElementById("uppercase")
let numbers=document.getElementById("numbers")
let symbols=document.getElementById("symbols")
let GenBtn=document.getElementById("GenBtn")
let copyicon=document.getElementById("copy-icon")

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent=inputSlider.value;
}
)



GenBtn.addEventListener('click', ()=>{
    passBox.value=generatePassword();

})


let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars="abcdefghijklmnopqrstuvwxyz"
let allNumbers="0123456789"
let allSymbols="~!@#$%^&*"


function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=uppercase.checked ? upperChars : "";
    allChars+=lowercase.checked ? lowerChars : "";
    allChars+=numbers.checked ? allNumbers : "";
    allChars+=symbols.checked ? allSymbols : "";
    
    if(allChars === "" || allChars.length === 0){

        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value)
    {
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}

copyicon.addEventListener('click', ()=>{
    if(passBox.value !== "" && passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);

        copyicon.innerText = "check";
        copyicon.title = "Password copied!";

        setTimeout(()=>{
            copyicon.innerText = "content_copy";
            copyicon.title = "";
        },3000)
    }
});





3