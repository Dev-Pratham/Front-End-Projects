

const inputBox=document.getElementById("text");
const searchBox=document.getElementById("bttn");
const refList=document.getElementById("listitems");



searchBox.addEventListener("click",myFunc1);

function myFunc1(){

 if(inputBox.value===''){
    alert("Please enter something");
 }

 else{
    const li=document.createElement("li");
    li.innerHTML=inputBox.value;
   //  refList.appendChild(li);

    const span=document.createElement("span");
    span.innerHTML='\u00D7';
    li.appendChild(span);
    refList.appendChild(li);

 }

 inputBox.value='';
 saveData();

}

listitems.addEventListener("click",function(e){


   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
   }

   else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();
   }



})

function saveData(){
   localStorage.setItem("data",listitems.innerHTML);
}

function getData(){
   listitems.innerHTML=localStorage.getItem("data");
}

getData();



