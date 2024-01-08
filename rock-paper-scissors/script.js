const computerChoiceDisplay=document.getElementById("comp-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");

const possibleChoices=document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener("click",e=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random() * possibleChoices.length)+1;
    
    if (randomNumber===1){
        computerChoice='rock'
    }
    else if (randomNumber===2){
        computerChoice='paper'
    }
    else{
        computerChoice='scissors'
    }

    computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice===userChoice){
        result="It's a draw!";
    }

    else if(computerChoice==='rock' && userChoice==='scissors' || computerChoice==='paper' && userChoice==='rock' || computerChoice==='scissors' && userChoice==='paper'){
        result='You lost!';
    }
    // else if(computerChoice==='paper' && userChoice==='rock'){
    //     result='You lost';
    // }
    // else if(computerChoice==='scissors' && userChoice==='paper'){
    //     result='You lost';
    // }
    else{
        result='You won!';
    }
    resultDisplay.innerHTML=result;
}