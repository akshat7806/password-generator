const output = document.getElementById("input");
const numInput = document.getElementById("text-size");
const rangInput = document.getElementById("range");
const alphabates = "abcdefghijklmnopqrstuvwxyz";
const ALPHABATES = "ABCDEFGHIJKLMNOPQRSTUVWXZYZ";
const number = "0123456789";
const symbols = "!@#$%^&*(){}[]<>/|";
const uppercaseID = document.getElementById('Uppercase');
const LowercasesID = document.getElementById('Lowercase');
const numbersID = document.getElementById('numbers');
const symbolsID = document.getElementById('symbols');

const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random()* dataset.length)];
}
const allClases = document.querySelectorAll(".allcases");
allClases.forEach(ans=>{
    ans.addEventListener('click',function(){
       ans.classList.toggle('active');
       start();
    });
});

rangInput.oninput = function(){
    numInput.value = this.value;
    start();
}


const generatePassword = (password = "") =>{
    if(uppercaseID.classList.contains('active')){
        password += getRandomData(ALPHABATES);
    }
    if(LowercasesID.classList.contains('active')){
        password += getRandomData(alphabates);
    }
    if(numbersID.classList.contains('active')){
        password += getRandomData(number);
    }
    if(symbolsID.classList.contains('active')){
        password += getRandomData(symbols);
    }
    if(password.length<numInput.value){
        return generatePassword(password);
    }
    return password.substring(0,numInput.value);
}
function start(){
    output.value = "";
    passwordAll = 0;
    passwordAll = generatePassword();
    output.value =  passwordAll;
}
function copypassword(){
    output.select();
    navigator.clipboard.writeText(output.value);
}
const copybtn = document.getElementById("copy");
copybtn.addEventListener("click",function(){
    console.log('clicked');
    copypassword();
});
const rotate = document.getElementById("rotate")
rotate.addEventListener("click",function(){
    start();

})
start();