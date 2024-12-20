

//modelling the question 
const questions=[

    {
        question: "Which is largest animal in the world",
        answer:[
            {text:"Vatican city",result:true},
            {text:"Monace", result:false},
            {text:"Nauru",result:false},
            {text:"Tuvalu",result:false}
        ]
    },
    {
        question: "Who has written this code",
        answer:[
            {text:"Pratham Chaurasia",result:true},
            {text:"Sona Chaurasia", result:false},
            {text:"Mona Chaurasia",result:false},
            {text:"Neelam Chaurasia",result:false}
        ]
    },
    {
        question: "Which is pratham`s origin city",
        answer:[
            {text:"birgunj",result:false},
            {text:"kathmandu", result:false},
            {text:"delhi",result:false},
            {text:"varanasi",result:true}
        ]
    },
    {
        question: "Which is my birth year",
        answer:[
            {text:"2002",result:true},
            {text:"2004", result:false},
            {text:"2006",result:false},
            {text:"1999",result:false}
        ]
    }

];

//getting the references 
const questionElement=document.getElementById("questions");
const answerElements=document.getElementsByClassName("answer-btn")[0];
const nextBtn=document.getElementById("nxt-btn");



//initialized the current question index to zero
let currentIndexQuestion=0;
let score=0;

function startQuizz(){
    currentIndexQuestion=0;
    score=0;
    nextBtn.innerHTML="Next"; //bcz at the end we will modifiy it with replay so when we start again we need next at beginning
    showQuestions();
}

function showQuestions() {

    //before showing the ques
    resetState();


    let currentQuestion = questions[currentIndexQuestion];
    let questionNumber = currentIndexQuestion + 1;

   

    // Add question text
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    
    // Add answer buttons
    currentQuestion.answer.forEach(x => {
        const button = document.createElement("button");
        button.innerHTML = x.text;
        button.classList.add("btn");
        answerElements.appendChild(button);


    //creating a dataset named result on each button 
        if(x.result){
            button.dataset.result=x.result;
        }

        button.addEventListener("click",selectAnswer);
    });

   
   
}


function resetState(){
    nextBtn.style.visibility="hidden";

    while(answerElements.firstChild){

        answerElements.removeChild(answerElements.firstChild);
    }
}

function selectAnswer(e){

 const selectedBtn=e.target;
 //validating correct result through dataset
 const isCorrect=selectedBtn.dataset.result === "true";
 
 if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
 }
 else{
    selectedBtn.classList.add("incorrect");
 }

 Array.from(answerElements.children).forEach(button=>{
 
    if(button.dataset.result === "true"){
        button.classList.add("correct");
    }
    button.disabled=true;

 });

 nextBtn.style.visibility="visible";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML="play again";
    nextBtn.style.visibility="visible";
}

function handleNextButton(){

   currentIndexQuestion++;
   if(currentIndexQuestion<questions.length){
    showQuestions();
   }
   else{
     showScore();
   }

}


nextBtn.addEventListener("click",()=>{

    if(currentIndexQuestion < questions.length){
        handleNextButton();
    }
    else{
        startQuizz();  //it will restart the quizz
    }

});



startQuizz();