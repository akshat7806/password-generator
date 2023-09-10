const output = document.getElementById("input");
const numInput = document.getElementById("text-size");
const rangInput = document.getElementById("range");
const alphabates = "abcdefghijklmnopqrstuvwxyz";
const ALPHABATES = "ABCDEFGHIJKLMNOPQRSTUVWXZYZ";
const number = "0123456789";
const symbols = "!@#$%^&*(){}[]<>/|";
const allCases = document.querySelectorAll(".allcases");

const uppercaseID = document.getElementById('Uppercase');
const LowercasesID = document.getElementById('Lowercase');
const numbersID = document.getElementById('numbers');
const symbolsID = document.getElementById('symbols');

rangInput.addEventListener('click',start());
rangInput.oninput = function(){
    numInput.value = this.value;
}
let passwordAll = 0;


let Symbolcheck = 19;
let alphacheck = 20;
let ALPHAchk = 15;
let numchec = 18;
const arr = [symbols,ALPHABATES,number,alphabates];
function userinputs(){

    if(symbolsID.classList.contains('active')){
        symbols = "";
    }
    if(numbersID.classList.contains('active')){
        number = "";
    }
    if(uppercaseID.classList.contains('active')){
        ALPHABATES = "";
    }
    if(LowercasesID.classList.contains('active')){
        alphabates = "";
    }
}
let k = arr.length-1;
let j = arr.length-1;
function addALL(e){
    for (let i = 0; i <numInput.value-1; i++) {
        let a = arr[k--];
        passwordAll = passwordAll + a[Math.floor(Math.random()*a.length)];
        if (k===0) {
            k = j;
        }
    }
}
function start(){
    resetState();
    userinputs();
    addALL();
    output.value = passwordAll;
}
function resetState(){
  
}
start();