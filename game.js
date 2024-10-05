let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//  4th
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = " Game was Draw. Play again!";
    msg.style.backgroundColor = "blue";
}
  

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose!  ${compChoice} beats  Your${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}

// 3rd part
// generate computer choice
const genCompChoice =() => {
    const options = ["rock","paper","scissors"];
      const randIdx= Math.floor(Math.random() * 3);
      return options[randIdx];
    // math func no. dega or wahi no options (array ) m index ki tarah use hoga
    // rock,paper, scissors (comp generate one randomly)
}



// 2nd part
// generate user choice
const playGame = (userChoice) => {
 console.log("user choice = ", userChoice);
 const compChoice = genCompChoice();
 console.log("comp choice = ", compChoice);

 if(userChoice === compChoice) {
    // draw
    drawGame();
 } else{
     let userWin  = true;
     if(userChoice === "rock"){
    //     scissors, paper
        userWin= compChoice === "paper" ? false : true;
     }else if(userChoice === "paper"){
        // rock, scissors
        userWin=  compChoice === "scissors" ? false : true;
     }else{
        // rock, paper
        userWin= compChoice === "rock" ? false : true;
     }
     showWinner(userWin,userChoice,compChoice)
 }
}


// 1st part
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {  
        const userChoice = choice.getAttribute("id")  ;      
    //  console.log("choice was clicked",userChoice);
     playGame(userChoice);
    });

});
