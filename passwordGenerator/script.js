

const outputField=document.querySelector(".card input");
const generateButton=document.querySelector(".card button");
const toolTip=document.querySelector(".card .tooltip");

outputField.addEventListener('click',myfunction);

function myfunction(){
    outputField.classList.toggle('checked');
    toolTip.classList.toggle('show');

    navigator.clipboard.writeText(outputField.value)
    
    setTimeout(()=>{
        outputField.classList.toggle('checked');
        toolTip.classList.toggle('show');
    },600);
}

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase=upperCase.toLowerCase();
const numbers="0123456789";
const specialChar="!@#$%^&*()_+[]{}|;:,.<>?/~`";

const comb=upperCase+lowerCase+numbers+specialChar;

let passwordLenght=12;

generateButton.addEventListener('click',()=>{

let str="";
str+=upperCase[Math.floor(Math.random() * upperCase.length)];
str+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
str+=numbers[Math.floor(Math.random() * numbers.length)];
str+=specialChar[Math.floor(Math.random() * specialChar.length)];
    
 while(str.length<passwordLenght){
    str+=comb[Math.floor(Math.random() * comb.length)];
 }

 outputField.value=str;


})



